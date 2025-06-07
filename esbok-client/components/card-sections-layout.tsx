import React from "react";
import { cn } from "@/lib/utils";

interface CardSectionsLayoutProps {
  /** Optional title to display above the section. */
  title?: string;
  children: React.ReactNode;
  /** Extra classes applied to the outer section element. */
  className?: string;
  /** Extra classes applied to the title element. */
  titleClassName?: string;
}

export default function CardSectionsLayout({
  title,
  children,
  className,
  titleClassName,
}: CardSectionsLayoutProps) {
  return (
    <section className={cn("px-5", className)}>
      {title && (
        <h2 className={cn("text-lg font-bold text-gray-800 mb-4", titleClassName)}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
