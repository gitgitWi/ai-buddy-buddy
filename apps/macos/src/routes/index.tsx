import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-y-2 overflow-auto">
      <Link to="/web-apps">Web Apps</Link>
    </div>
  );
}
