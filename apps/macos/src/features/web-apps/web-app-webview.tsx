import { Webview, type WebviewProps } from '~/components/ui/webview';
import { cn } from '~/lib/utils';

export function WebAppWebview({
  src,
  className,
}: Pick<WebviewProps, 'src' | 'className'>) {
  return (
    <div className="flex h-[calc(100%-4rem)] max-h-[960px] w-[480px] shrink-0 flex-col gap-2">
      <a
        className="w-full rounded-md px-2 py-1 font-light font-mono text-neutral-500 text-xs underline underline-offset-2"
        href={src}
        rel="noreferrer"
        target="_blank"
      >
        {src}
      </a>

      <Webview className={cn('h-full w-full shrink-0', className)} src={src} />
    </div>
  );
}
