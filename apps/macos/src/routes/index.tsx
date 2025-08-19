import { createFileRoute } from '@tanstack/react-router';
import { Text } from '~/components/ui/text';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-y-2 pb-[20%]">
      <Text.H1 className="select-none text-neutral-950 dark:text-neutral-50">
        AI BuddyBuddy
      </Text.H1>
    </div>
  );
}
