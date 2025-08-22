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
    <div className="flex h-[calc(100%-4rem)] max-h-[960px] w-[480px] shrink-0 flex-col gap-2">
      <a
        className="w-max cursor-pointer rounded-md px-2 pt-2 pb-1 font-light font-mono text-neutral-500 text-xs underline underline-offset-2 dark:text-neutral-300"
        href={currentUrl}
        rel="noreferrer"
        target="_blank"
      >
        {currentUrl}

        <LuExternalLink className="ml-2 inline h-3 w-3" />
      </a>

      <Webview
        className={cn('h-full w-full shrink-0 rounded-xl', className)}
        ref={webviewRef}
        src={url}
      />
    </div>
  );
}
