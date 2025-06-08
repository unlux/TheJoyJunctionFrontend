"use client"

import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const handleGoogleLogin = () => {
    // Construct the storefront redirect URL. This is where Google will redirect the user
    // after successful authentication, and then Medusa will redirect to this URL with the token.
    // Ensure this matches a path that can handle the token (e.g., /auth/callback).
    const storefrontRedirectUrl = `${window.location.origin}/auth/callback`

    // The backend URL for Medusa
    const backendUrl =
      process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"

    // The backend Google auth initiation endpoint
    // It needs `storefront_redirect_url` so Medusa knows where to send the user back
    // with the Medusa JWT after its own callback processing.
    const googleAuthUrl = `${backendUrl}/api/auth/customer/google?storefront_redirect_url=${encodeURIComponent(
      storefrontRedirectUrl
    )}`

    // Use full redirect as per Medusa docs
    window.location.href = googleAuthUrl
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Please log in to continue.</p>
      <button
        onClick={handleGoogleLogin}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Login with Google
      </button>
      {/* You can add other login methods here, like email/password */}
    </div>
  )
}
