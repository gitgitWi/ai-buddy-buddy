import { createFileRoute, Link } from '@tanstack/react-router';
import { WebApps } from '~/features/web-apps/web-apps';

export const Route = createFileRoute('/web-apps')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative flex h-full w-full flex-col items-start justify-start gap-y-2 overflow-auto">
      <nav className="flex flex-row items-center justify-start gap-x-2 px-4 ">
        <Link to="/">Home</Link>
      </nav>

      <WebApps />
    </div>
  );
}
