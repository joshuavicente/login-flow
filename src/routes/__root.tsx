import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

export const Route = createRootRoute({
  component: () => (
    <>
      <main className="grid min-h-screen place-items-center p-4">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
})
