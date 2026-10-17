import { createFileRoute, Navigate } from "@tanstack/react-router"
import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/todo-app/home")({
  component: RouteComponent,
})

function RouteComponent() {
  const { isLoading, isAuthenticated, user, logout } = useAuth0()

  if (isLoading) return <div>Loading...</div>
  if (!isAuthenticated) return <Navigate to="/todo-app/login" />

  return (
    <div className="grid gap-4">
      <p>Logged in as {user?.email}</p>
      <Button
        variant="outline"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </Button>
    </div>
  )
}
