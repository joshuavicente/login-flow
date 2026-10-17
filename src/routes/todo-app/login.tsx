import { createFileRoute, Navigate } from "@tanstack/react-router"
import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup } from "@/components/ui/field"
import {
  Card,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"

export const Route = createFileRoute("/todo-app/login")({
  component: LoginComponent,
})

export function LoginComponent() {
  const { isLoading, isAuthenticated, error, loginWithRedirect } = useAuth0()

  if (isLoading) return <div>Loading...</div>
  if (isAuthenticated) return <Navigate to="/todo-app/home" />

  const login = () => loginWithRedirect()
  const signup = () =>
    loginWithRedirect({ authorizationParams: { screen_hint: "signup" } })

  return (
    <FieldGroup className="items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Continue to sign in securely with Auth0
          </CardDescription>
          {error && (
            <p className="text-sm text-destructive">Error: {error.message}</p>
          )}
        </CardHeader>
        <CardFooter>
          <Field className="grid gap-2">
            <Button onClick={login} className="w-full">
              Log In
            </Button>
            <Button onClick={signup} variant="outline" className="w-full">
              Sign Up
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </FieldGroup>
  )
}

export default LoginComponent
