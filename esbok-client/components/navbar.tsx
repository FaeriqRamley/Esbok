"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { NavbarAuth } from "./navbar-auth";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/nearby", label: "Nearby" },
    { href: "/log-food", label: "Log Food" },
    { href: "/pantries", label: "Pantries" },
    { href: "/activities", label: "Activity" },
  ];

  return (
    <div className="w-full border-b border-esbok-border">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between p-4">
        {/* Mobile sign in / avatar */}
        <Button variant="outline" size="sm" className="md:hidden rounded-full">
          Sign In
        </Button>

        {/* App name */}
        <Link
          href="/home"
          className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700"
        >
          Esbok
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6 ml-8 text-sm font-light text-gray-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-esbok-primary"
                  : "hover:text-gray-900"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Suspense fallback={<span className="text-gray-500">Loading...</span>}>
          <NavbarAuth />
        </Suspense>
      </div>
    </div>
  );
}
