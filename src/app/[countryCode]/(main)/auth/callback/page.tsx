"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { sdk } from "@/lib/config";
import { decodeToken } from "react-jwt";

export default function GoogleCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function handleCallback() {
      const code = searchParams.get("code");
      const state = searchParams.get("state");
      if (!code || !state) return;
      try {
        // Validate callback with Medusa backend (recommended usage)
        const token = await sdk.auth.callback("customer", "google", {
          code,
          state,
        });
        const decoded = decodeToken(token);
        if (decoded && (decoded as any).actor_id) {
          router.replace("/");
        } else {
          await sdk.store.customer.create({ email: (decoded as any).email });
          await sdk.auth.refresh();
          router.replace("/");
        }
      } catch (err) {
        // Optionally handle error (e.g., show error message or redirect)
        router.replace("/account/@login?error=google-auth");
      }
    }
    handleCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return <div>Authenticating with Google...</div>;
}
