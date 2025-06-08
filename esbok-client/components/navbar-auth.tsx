"use client";

import { Button } from "./ui/button";
import { signOut } from "@/app/auth/actions";
import type { User } from "@supabase/supabase-js";
import Link from "next/link";

interface NavbarAuthProps {
  user: User | null;
}

export function NavbarAuth({ user }: NavbarAuthProps) {
  console.log("NavbarAuth user:", user);
  return (
    <>
      {user ? (
        <form action={signOut}>
          <Button type="submit" variant="outline" size="sm" className="ml-auto">
            Sign Out
          </Button>
        </form>
      ) : (
        <Link href="/sign-in">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex rounded-full ml-auto"
          >
            Sign In
          </Button>
        </Link>
      )}
    </>
  );
}
