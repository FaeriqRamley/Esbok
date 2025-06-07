import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const statCardVariants = cva("text-center", {
  variants: {
    size: {
      sm: "p-3",
      lg: "p-4",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

const iconContainerVariants = cva(
  "mx-auto rounded-full flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "w-6 h-6 mb-1",
        lg: "w-8 h-8 mb-2",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
);

const iconVariants = cva("", {
  variants: {
    size: {
      sm: "w-3 h-3",
      lg: "w-4 h-4",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

interface StatCardProps extends VariantProps<typeof statCardVariants> {
  icon: React.ReactNode;
  label: React.ReactNode;
  value: React.ReactNode;
  /** Background color utility classes for the icon container. */
  iconBgClass?: string;
  className?: string;
}

export default function StatCard({
  icon,
  label,
  value,
  iconBgClass = "bg-esbok-mint",
  size,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("border border-esbok-border", className)}>
      <CardContent className={cn(statCardVariants({ size }))}>
        <div className={cn(iconContainerVariants({ size }), iconBgClass)}>
          {React.isValidElement(icon)
            ? React.cloneElement(icon as React.ReactElement, {
                className: cn(iconVariants({ size }), icon.props.className),
              })
            : icon}
        </div>
        <p className="text-xs text-gray-600">{label}</p>
        <p className="text-lg font-bold text-gray-800">{value}</p>
      </CardContent>
    </Card>
  );
}
