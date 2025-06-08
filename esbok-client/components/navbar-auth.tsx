"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client";
import { signOut } from "@/app/auth/actions";
import type { User } from "@supabase/supabase-js";
import Link from "next/link";

export function NavbarAuth() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    // Initial user fetch
    supabase.auth.getUser().then(({ data: { user } }) => {
      setCurrentUser(user ?? null);
      setLoading(false);
    });

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setCurrentUser(session?.user ?? null);
      }
    );

    // Cleanup subscription on unmount
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <span className="text-gray-500">Loading...</span>;
  }

  return (
    <>
      {currentUser ? (
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
