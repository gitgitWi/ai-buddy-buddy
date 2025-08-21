import { useState } from 'react';
import { OPTIONS } from './constants';
import { WebAppWebview } from './web-app-webview';

export function WebApps() {
  const [selected, setSelected] = useState(OPTIONS);

  return (
    // TODO: selector - filter

    <div className="app_region_no_drag flex h-full w-full flex-row flex-nowrap justify-start gap-8 overflow-x-auto p-4 align-baseline">
      {selected.map((option) => (
        <WebAppWebview key={option.name} src={option.url} />
      ))}
    </div>
  );
}
