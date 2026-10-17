import { createFileRoute, Navigate } from "@tanstack/react-router"
import { useAuth0 } from "@auth0/auth0-react"

export const Route = createFileRoute("/")({
  component: IndexComponent,
})

function IndexComponent() {
  const { isLoading, isAuthenticated } = useAuth0()

  // Wait for Auth0 to finish processing the login callback (?code=&state=)
  if (isLoading) return <div>Loading...</div>

  return <Navigate to={isAuthenticated ? "/todo-app/home" : "/todo-app/login"} />
}
