import { createRouter, RouterProvider } from '@tanstack/react-router';
import { queryClient } from '~/features/providers/query';
import { routeTree } from './routeTree.gen.ts';

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  scrollRestorationBehavior: 'smooth',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function TanstackRouterProvider() {
  return <RouterProvider router={router} />;
}
