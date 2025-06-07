import BottomNav from "@/components/bottom-nav";
import { cn } from "@/lib/utils";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  /**
   * Extra classes for the scrollable content container.
   */
  contentClassName?: string;
  /**
   * Show the bottom navigation bar. Defaults to true.
   */
  withBottomNav?: boolean;
}

export default function PageLayout({
  children,
  contentClassName,
  withBottomNav = true,
}: PageLayoutProps) {
  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen flex flex-col">
      <div
        className={cn(
          "flex-1 overflow-y-auto",
          withBottomNav && "pb-20 md:pb-0",
          contentClassName
        )}
      >
        {children}
      </div>
      {withBottomNav && <BottomNav />}
    </div>
  );
}
