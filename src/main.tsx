import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Auth0Provider } from "@auth0/auth0-react"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"

// Import the generated route tree
import { routeTree } from "./routeTree.gen"
import { RouterProvider, createRouter } from "@tanstack/react-router"

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
      // After Auth0 redirects back, send the user to the home page
      onRedirectCallback={() => router.navigate({ to: "/login-flow/home" })}
    >
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Auth0Provider>
  </StrictMode>
)
