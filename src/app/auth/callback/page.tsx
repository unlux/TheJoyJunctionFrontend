"use client"

import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"

// This is a simplified example. In a real app, you'd likely use a state management library
// or context to store the token and user session, and also handle errors more gracefully.

export default function AuthCallbackPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const token = searchParams.get("medusa_auth_token")
    const error = searchParams.get("error")
    const errorMessage = searchParams.get("message")

    if (error) {
      console.error("OAuth Error:", error, errorMessage)
      // Redirect to login page with error message
      // You might want to display a notification to the user here
      router.push(
        `/login?error=${encodeURIComponent(error)}&message=${encodeURIComponent(
          errorMessage || "Login failed."
        )}`
      )
      return
    }

    if (token) {
      console.log("Received Medusa auth token:", token)
      // Store the token (e.g., in localStorage, HttpOnly cookie via a server action, or state management)
      // For this example, we'll use localStorage. For production, HttpOnly cookies are more secure.
      try {
        localStorage.setItem("medusa_auth_token", token)
        console.log("Token stored in localStorage.")

        // Optionally, you can verify the token by calling the /api/auth/me endpoint
        // and then redirect to the account page or previous page.
        // For simplicity, we'll just redirect to the homepage.
        router.push("/")
      } catch (e) {
        console.error("Failed to store token in localStorage:", e)
        // Handle storage error, maybe redirect to login with an error
        router.push("/login?error=storage_failed")
      }
    } else if (!error) {
      // This case should ideally not happen if the backend redirect is correct
      console.warn("No token or error received in auth callback.")
      router.push("/login?error=unknown_callback_issue")
    }
  }, [searchParams, router])

  return (
    <div>
      <h1>Authenticating...</h1>
      <p>Please wait while we process your login.</p>
      {/* You can add a loading spinner here */}
    </div>
  )
}
