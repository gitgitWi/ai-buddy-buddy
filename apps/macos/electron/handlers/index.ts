import { ipcMain } from 'electron';
import { SETTINGS } from './channel-keys';
import { getSettings, setSettings } from './settings';

export const registerHandlers = () => {
  ipcMain.handle(SETTINGS.GET, getSettings);
  ipcMain.handle(SETTINGS.SET, setSettings);
};
