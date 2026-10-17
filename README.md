# login-flow

A simple React app that shows a login flow using [Auth0](https://auth0.com). Users can sign up, log in and log out through Auth0's hosted login page, and the home page is only visible once logged in.

Built with React, TypeScript, Vite, TanStack Router, Tailwind CSS and shadcn/ui.

## Setup

### 1. Install dependencies

```bash
git clone https://github.com/joshuavicente/login-flow.git
cd login-flow
npm install
```

### 2. Create an Auth0 application

In the [Auth0 Dashboard](https://manage.auth0.com), create an application of type **Single Page Application** and set:

- **Allowed Callback URLs:** `http://localhost:5173/`
- **Allowed Logout URLs:** `http://localhost:5173/`
- **Allowed Web Origins:** `http://localhost:5173`

### 3. Add your Auth0 credentials

Create a `.env.local` file in the project root with the **Domain** and **Client ID** from your application's settings:

```bash
VITE_AUTH0_DOMAIN=your-tenant.us.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
```

### 4. Run the app

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and sign up for an account.

## Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the dev server (port 5173) |
| `npm run build`     | Type check and build for production |
| `npm run preview`   | Preview the production build     |
| `npm run lint`      | Run ESLint                       |
| `npm run format`    | Format code with Prettier        |
| `npm run typecheck` | Run the TypeScript type check    |
