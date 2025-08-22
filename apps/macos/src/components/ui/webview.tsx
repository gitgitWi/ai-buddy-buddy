import type { WebviewTag } from 'electron';
import { type RefObject, useEffect } from 'react';
import { cn } from '~/lib/utils';

export type WebviewProps = {
  src: string;
  ref: RefObject<WebviewTag | null>;
  className?: string;
  partition?: string;
  zoomFactor?: number;
};

export function Webview({
  src,
  ref,
  className,
  partition = 'persist:webview',
  zoomFactor = 0.85,
}: WebviewProps) {
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.addEventListener('dom-ready', () => {
      ref.current!.setZoomFactor(zoomFactor);
    });
  }, [zoomFactor]);

  return (
    <div
      className={cn('shrink-0 overflow-hidden rounded-md shadow-xl', className)}
    >
      <webview
        // biome-ignore lint/nursery/noTsIgnore: allowpopups accepts string
        // @ts-ignore
        allowpopups="true"
        className={cn('h-full w-full')}
        partition={partition}
        ref={ref}
        src={src}
      />
    </div>
  );
}
