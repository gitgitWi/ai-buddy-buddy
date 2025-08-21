import { app, BrowserWindow, session } from 'electron';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { registerHandlers } from './handlers';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, '..');

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL;
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron');
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist');

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, 'public')
  : RENDERER_DIST;

let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC as string, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      webviewTag: true,
    },
    alwaysOnTop: true,

    frame: false,
    transparent: true,
    opacity: 1,
    backgroundColor: 'rgba(255,255,255,0)',
    backgroundMaterial: 'auto',
    titleBarStyle: 'hiddenInset',
    titleBarOverlay: true,
    roundedCorners: true,
    vibrancy: 'fullscreen-ui',
    visualEffectState: 'active',
    hasShadow: true,
    useContentSize: true,

    width: 520,
    minWidth: 520,
    height: 720,
    minHeight: 640,
  });

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    if (!import.meta.env.DEV) {
      return;
    }

    win?.webContents.openDevTools();
    win?.webContents.send('main-process-message', new Date().toLocaleString());
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    const newSession = session.fromPartition('persist:webview', {
      cache: true,
    });
    const newWindow = new BrowserWindow({
      webPreferences: {
        session: newSession,
        contextIsolation: true,
        nodeIntegration: false,
      },
      frame: true,
      alwaysOnTop: true,
      opacity: 1,
      backgroundColor: '#00000000',
      roundedCorners: true,
    });
    newWindow.loadURL(url);
    return { action: 'deny' };
  });

  registerHandlers();

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(RENDERER_DIST, 'index.html'));
  }
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
    win = null;
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(() => {
  // Create main window
  createWindow();
});
