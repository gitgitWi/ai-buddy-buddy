import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { TanstackQueryProvider } from './features/providers/query';
import { TanstackRouterProvider } from './features/providers/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanstackQueryProvider>
      <TanstackRouterProvider />
    </TanstackQueryProvider>
  </StrictMode>
);

// Use contextBridge
window.ipcRenderer?.on('main-process-message', (_event, message) => {
  console.log(message);
});
