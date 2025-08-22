import { useCallback } from 'react';
import { match, P } from 'ts-pattern';
import { useShallow } from 'zustand/shallow';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { cn } from '~/lib/utils';
import type { WebAppOption } from './constants';
import { useWebAppsStore } from './use-web-apps-store';
import { WebAppWebview } from './web-app-webview';

export function WebApps() {
  const { selected, unselected, toggleSelected } = useWebAppsStore(
    useShallow((state) => ({
      selected: state.selected,
      unselected: state.unselected,
      toggleSelected: state.toggleSelected,
    }))
  );

  const getAvatar = useCallback(
    (option: WebAppOption) =>
      match(option.icon)
        .with(
          { hasComponent: true, Component: P.shape({ Avatar: P.nonNullable }) },
          ({ Component }) => <Component.Avatar size={24} />
        )
        .with({ hasUrl: true }, () => <AvatarImage src={option.icon.url} />)
        .otherwise(() => (
          <AvatarFallback className="text-center font-bold font-mono text-neutral-900 text-xs">
            {option.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        )),
    []
  );

  return (
    <>
      <div className="items-center-safe flex w-full flex-row justify-start gap-4 overflow-x-auto overflow-y-hidden px-4">
        <div className="-space-x-1 items-center-safe flex h-9 flex-row justify-start">
          {selected.map((option) => (
            <Avatar
              className={cn(
                'fade-in slide-in-from-right-full size-6 scale-95 animate-in cursor-pointer select-none bg-white/50 ring-2 ring-emerald-500 backdrop-blur-md transition-all hover:scale-100'
              )}
              key={option.name}
              onClick={() => {
                toggleSelected(option);
              }}
            >
              {getAvatar(option)}
            </Avatar>
          ))}
        </div>

        <div className="-space-x-1 items-center-safe flex h-9 flex-row justify-start transition-all">
          {unselected.map((option) => (
            <Avatar
              className={cn(
                'slide-out-to-left-100 fade-out size-6 scale-95 animate-out cursor-pointer select-none bg-white/50 ring-2 ring-neutral-500 grayscale backdrop-blur-md transition-all hover:scale-100 hover:grayscale-0'
              )}
              key={option.name}
              onClick={() => {
                toggleSelected(option);
              }}
            >
              {getAvatar(option)}
            </Avatar>
          ))}
        </div>
      </div>

      <div className="app_region_no_drag flex h-full w-full snap-x snap-mandatory flex-row flex-nowrap justify-start gap-8 overflow-x-auto p-4 align-baseline">
        {selected.map(({ name }) => (
          <WebAppWebview key={name} name={name} />
        ))}
      </div>
    </>
  );
}
