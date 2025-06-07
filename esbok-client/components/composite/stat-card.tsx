import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  label: React.ReactNode;
  value: React.ReactNode;
  /** Background color utility classes for the icon container. */
  iconBgClass?: string;
  /** Size variant. Default is 'lg' */
  size?: "sm" | "lg";
  className?: string;
}

export default function StatCard({
  icon,
  label,
  value,
  iconBgClass = "bg-esbok-mint",
  size = "lg",
  className,
}: StatCardProps) {
  const iconSize = size === "sm" ? "w-6 h-6" : "w-8 h-8";
  const innerIconSize = size === "sm" ? "w-3 h-3" : "w-4 h-4";
  const padding = size === "sm" ? "p-3" : "p-4";
  const margin = size === "sm" ? "mb-1" : "mb-2";

  return (
    <Card className={cn("border border-esbok-border", className)}>
      <CardContent className={cn(padding, "text-center")}>
        <div
          className={cn(
            iconSize,
            margin,
            "mx-auto rounded-full flex items-center justify-center",
            iconBgClass
          )}
        >
          {/* clone element to apply size */}
          {React.isValidElement(icon)
            ? React.cloneElement(icon as React.ReactElement, {
                className: cn(innerIconSize, icon.props.className),
              })
            : icon}
        </div>
        <p className="text-xs text-gray-600">{label}</p>
        <p className="text-lg font-bold text-gray-800">{value}</p>
      </CardContent>
    </Card>
  );
}
