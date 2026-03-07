import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-0.5 text-[10px] font-black uppercase tracking-[0.1em] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-brand-navy text-white shadow",
        secondary:
          "border-transparent bg-brand-gold-light text-brand-navy",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow",
        outline: "text-foreground border-brand-gold text-brand-gold",
        success: "bg-brand-green/10 text-brand-green border-brand-green/20",
        gold: "bg-brand-gold text-brand-navy border-none",
        verified: "bg-brand-green text-white border-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
