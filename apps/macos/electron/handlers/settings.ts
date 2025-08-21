import { store } from '../store';

/** @todo - shared types */
const DEFAULT_SETTINGS = {
  webAppsSelected: ['Manus', 'MS Copilot', 'Duck.ai'],
};

export const getSettings = (
  _event: unknown,
  key: keyof typeof DEFAULT_SETTINGS
) => {
  const value = store.get(key);
  if (value === undefined) {
    store.set(key, DEFAULT_SETTINGS[key]);
    return DEFAULT_SETTINGS[key];
  }
  return value;
};

export const setSettings = (
  _event: unknown,
  key: keyof typeof DEFAULT_SETTINGS,
  value: (typeof DEFAULT_SETTINGS)[keyof typeof DEFAULT_SETTINGS]
) => {
  store.set(key, value);
};
