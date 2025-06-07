"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MapPin, Plus, Apple, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-esbok-border">
      <div className="flex items-center justify-around py-2 px-4">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
            pathname === "/home" ? "text-esbok-primary" : "text-gray-500"
          }`}
        >
          <Link href="/home">
            <Home className="w-5 h-5" />
            <span className="text-xs font-normal">Home</span>
          </Link>
        </Button>

        <Button
          asChild
          variant="ghost"
          size="sm"
          className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
            pathname === "/nearby" ? "text-esbok-primary" : "text-gray-500"
          }`}
        >
          <Link href="/nearby">
            <MapPin className="w-5 h-5" />
            <span className="text-xs font-normal">Nearby</span>
          </Link>
        </Button>

        <Button
          asChild
          size="sm"
          className="w-12 h-12 rounded-full bg-esbok-primary hover:bg-esbok-primary/90 text-gray-800 shadow-lg"
        >
          <Link href="/log-food">
            <Plus className="w-6 h-6" />
          </Link>
        </Button>

        <Button
          asChild
          variant="ghost"
          size="sm"
          className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
            pathname === "/pantries" ? "text-esbok-primary" : "text-gray-500"
          }`}
        >
          <Link href="/pantries">
            <Apple className="w-5 h-5" />
            <span className="text-xs font-normal">Pantries</span>
          </Link>
        </Button>

        <Button
          asChild
          variant="ghost"
          size="sm"
          className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
            pathname === "/activities" ? "text-esbok-primary" : "text-gray-500"
          }`}
        >
          <Link href="/activities">
            <Activity className="w-5 h-5" />
            <span className="text-xs font-normal">Activity</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
