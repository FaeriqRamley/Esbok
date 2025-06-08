"use client";

import { useFormState } from "react-dom";
import { signUp } from "../auth/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function SignUpPage() {
  const supabase = createClient();
  const [state, formAction] = useFormState(signUp, { error: null });

  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  return (
    <div className="max-w-sm mx-auto flex flex-col justify-center min-h-screen p-5 space-y-4">
      <h1 className="text-xl font-bold text-center">Sign Up</h1>
      {state?.error && <p className="text-sm text-red-500 text-center">{state.error}</p>}
      <form action={formAction} className="space-y-3">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">Sign Up</Button>
      </form>
      <Button variant="outline" className="w-full" onClick={handleGoogle}>
        Continue with Google
      </Button>
      <p className="text-sm text-center">
        Already have an account?{' '}
        <Link href="/sign-in" className="underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
