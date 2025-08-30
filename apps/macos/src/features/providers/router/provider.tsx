import {
  createHashHistory,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import { queryClient } from '~/features/providers/query';
import { routeTree } from './routeTree.gen.ts';

const hashHistory = createHashHistory({});

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  scrollRestorationBehavior: 'smooth',
  history: hashHistory,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function TanstackRouterProvider() {
  return <RouterProvider router={router} />;
}
