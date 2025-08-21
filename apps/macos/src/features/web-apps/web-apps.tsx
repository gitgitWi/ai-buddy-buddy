import { useWebAppsStore } from './use-web-apps-store';
import { WebAppWebview } from './web-app-webview';

export function WebApps() {
  const { selected } = useWebAppsStore();

  return (
    // TODO: selector - filter

    <div className="app_region_no_drag flex h-full w-full flex-row flex-nowrap justify-start gap-8 overflow-x-auto p-4 align-baseline">
      {Array.from(selected).map((option) => (
        <WebAppWebview key={option.name} src={option.url} />
      ))}
    </div>
  );
}
