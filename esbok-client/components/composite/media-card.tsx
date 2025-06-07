import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface MediaCardProps {
  /** Element displayed on the left side, e.g. image or icon container */
  left: React.ReactNode;
  /** Optional element on the right side, e.g. arrow or action button */
  right?: React.ReactNode;
  /** Main content */
  children: React.ReactNode;
  /** Additional classes for Card */
  className?: string;
  /** Classes for CardContent */
  contentClassName?: string;
  /** Classes for inner wrapper */
  wrapperClassName?: string;
}

export default function MediaCard({
  left,
  right,
  children,
  className,
  contentClassName,
  wrapperClassName,
}: MediaCardProps) {
  return (
    <Card className={cn("border border-esbok-border overflow-hidden", className)}>
      <CardContent className={cn("p-4", contentClassName)}>
        <div className={cn("flex gap-3", wrapperClassName)}>
          <div className="flex-shrink-0">{left}</div>
          <div className="flex-1 min-w-0">{children}</div>
          {right && <div className="flex items-center">{right}</div>}
        </div>
      </CardContent>
    </Card>
  );
}
