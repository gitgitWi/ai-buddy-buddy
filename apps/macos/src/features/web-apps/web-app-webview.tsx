import type { DidNavigateInPageEvent, WebviewTag } from 'electron';
import { useEffect, useMemo, useRef, useState } from 'react';
import { LuExternalLink } from 'react-icons/lu';
import { Webview, type WebviewProps } from '~/components/ui/webview';
import { cn } from '~/lib/utils';
import { useWebAppsStore } from './use-web-apps-store';

export function WebAppWebview({
  name,
  className,
}: Pick<WebviewProps, 'className'> & { name: string }) {
  const webviewRef = useRef<WebviewTag | null>(null);
  const selected = useWebAppsStore((state) => state.selected);
  const url = useMemo(
    () => selected.find((option) => option.name === name)?.url ?? '',
    [selected, name]
  );
  /** @todo save in main process */
  const [currentUrl, setCurrentUrl] = useState(url);

  useEffect(() => {
    if (!webviewRef.current) {
      return;
    }

    const navigateChangeListener = (event: DidNavigateInPageEvent) => {
      setCurrentUrl(event.url);
    };

    webviewRef.current.addEventListener(
      'did-navigate-in-page',
      navigateChangeListener
    );

    return () => {
      webviewRef.current?.removeEventListener(
        'did-navigate-in-page',
        navigateChangeListener
      );
    };
  }, [name]);

  return (
    <div className="flex h-[calc(100%-1rem)] max-h-[960px] w-[480px] shrink-0 snap-center snap-always flex-col gap-2 overflow-hidden rounded-lg bg-neutral-200/20 p-1 shadow-xl dark:bg-neutral-950/30">
      <div className="flex w-max max-w-full shrink-0 grow-0 basis-6 cursor-pointer items-center justify-between rounded-md px-2 pt-1 text-neutral-500 dark:text-neutral-300 ">
        <a
          className="line-clamp-1 font-light font-mono text-xs tracking-tight underline underline-offset-2 "
          href={currentUrl}
          rel="noreferrer"
          target="_blank"
        >
          {currentUrl}
        </a>

        <LuExternalLink className="ml-2 inline h-2.5 w-2.5 shrink-0" />
      </div>

      <Webview
        className={cn('h-full w-full shrink grow rounded-lg', className)}
        ref={webviewRef}
        src={url}
      />
    </div>
  );
}
