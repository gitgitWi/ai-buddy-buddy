/// <reference types="vite-plugin-electron/electron-env" />

import type { IpcRendererMethods } from './preload';

declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬─┬ dist
     * │ │ └── index.html
     * │ │
     * │ ├─┬ dist-electron
     * │ │ ├── main.js
     * │ │ └── preload.js
     * │
     * ```
     */
    APP_ROOT: string;
    /** /dist/ or /public/ */
    VITE_PUBLIC: string;
  }
}

declare global {
  interface Window {
    ipcRenderer: import('electron').IpcRenderer & IpcRendererMethods;
  }
}
