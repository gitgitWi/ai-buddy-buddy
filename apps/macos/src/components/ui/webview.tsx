import type { WebviewTag } from 'electron';
import { useEffect, useRef } from 'react';
import { cn } from '~/lib/utils';

export type WebviewProps = {
  src: string;
  className?: string;
  partition?: string;
  zoomFactor?: number;
};

export function Webview({
  src,
  className,
  partition = 'persist:webview',
  zoomFactor = 0.85,
}: WebviewProps) {
  const ref = useRef<WebviewTag | null>(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.addEventListener('dom-ready', () => {
      ref.current?.setZoomFactor(zoomFactor);
    });
  }, [zoomFactor]);

  return (
    <div
      className={cn('shrink-0 overflow-hidden rounded-md shadow-xl', className)}
    >
      <webview
        allowpopups
        className={cn('h-full w-full')}
        partition={partition}
        ref={ref}
        src={src}
      />
    </div>
  );
}
