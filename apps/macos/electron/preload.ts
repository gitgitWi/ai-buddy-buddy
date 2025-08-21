import { contextBridge, ipcRenderer } from 'electron';
import { SETTINGS } from './handlers/channel-keys';

export type IpcRendererMethods = typeof ipcRendererMethods;

const ipcRendererMethods = {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args;
    return ipcRenderer.on(channel, (event, ...args) =>
      listener(event, ...args)
    );
  },

  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args;
    return ipcRenderer.off(channel, ...omit);
  },

  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args;
    return ipcRenderer.send(channel, ...omit);
  },

  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args;
    return ipcRenderer.invoke(channel, ...omit);
  },

  getSetting(key: string) {
    return ipcRenderer.invoke(SETTINGS.GET, key);
  },

  setSetting(key: string, value: unknown) {
    return ipcRenderer.invoke(SETTINGS.SET, key, value);
  },
};

contextBridge.exposeInMainWorld('ipcRenderer', ipcRendererMethods);
