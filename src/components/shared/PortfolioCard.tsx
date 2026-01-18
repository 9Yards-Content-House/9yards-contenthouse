import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  href: string;
  className?: string;
}

export function PortfolioCard({
  image,
  title,
  category,
  href,
  className,
}: PortfolioCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group block rounded-xl overflow-hidden bg-card border border-border card-hover image-zoom",
        className
      )}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
          <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-2">
            {category}
          </span>
          <h3 className="text-primary-foreground font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-4 group-hover:bg-muted/50 transition-colors">
        <span className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded mb-2">
          {category}
        </span>
        <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
}
