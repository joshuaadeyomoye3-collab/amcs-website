import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full rounded-xl border border-brand-green/15 bg-brand-cream px-4 py-3 text-sm text-foreground transition-colors placeholder:text-foreground/40 focus:border-brand-green focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
