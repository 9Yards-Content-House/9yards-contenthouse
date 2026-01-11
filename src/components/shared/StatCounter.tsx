import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  dark?: boolean;
}

export function StatCounter({
  value,
  suffix = "",
  label,
  className,
  dark = false,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div
        className={cn(
          "text-display-1 font-bold",
          dark ? "text-primary-foreground" : "text-primary"
        )}
      >
        {count}
        {suffix}
      </div>
      <div
        className={cn(
          "text-body mt-2",
          dark ? "text-primary-foreground/80" : "text-muted-foreground"
        )}
      >
        {label}
      </div>
    </div>
  );
}
