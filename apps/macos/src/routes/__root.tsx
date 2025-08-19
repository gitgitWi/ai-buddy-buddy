import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import type { PropsWithChildren } from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootLayout>
      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </RootLayout>
  );
}

function RootLayout({ children }: PropsWithChildren) {
  return (
    // TODO: header
    <div className="h-full w-full pt-6">{children}</div>
  );
}
