import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 shadow-md hover:shadow-lg active:bg-primary/80",
        destructive: "bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 active:bg-destructive/80",
        outline: "border-2 border-primary bg-transparent text-primary rounded-lg hover:bg-primary hover:text-primary-foreground active:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 active:bg-secondary/70",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground rounded-lg active:bg-accent/15",
        link: "text-primary underline-offset-4 hover:underline",
        // 9Yards accent button - clean background hover effects
        accent: "bg-[#E6411C] text-white font-semibold rounded-full hover:bg-[#C93917] active:bg-[#AB3013] transition-colors duration-200",
        hero: "bg-[#E6411C] text-white font-semibold rounded-full hover:bg-[#C93917] active:bg-[#AB3013] transition-colors duration-200 text-base px-8 py-4",
        "hero-outline": "border-2 border-white bg-transparent text-white rounded-full hover:bg-white hover:text-[#E6411C] active:bg-white/90 transition-colors duration-200 text-base px-8 py-4",
        cta: "bg-[#E6411C] text-white font-semibold rounded-full hover:bg-[#C93917] active:bg-[#AB3013] transition-colors duration-200",
        "outline-accent": "border-2 border-[#E6411C] bg-transparent text-[#E6411C] rounded-full hover:bg-[#E6411C] hover:text-white active:bg-[#C93917] transition-colors duration-200",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
