import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { TanstackRouterProvider } from './features/providers/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanstackRouterProvider />
  </StrictMode>
);

// Use contextBridge
window.ipcRenderer?.on('main-process-message', (_event, message) => {
  console.log(message);
});
