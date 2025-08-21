import { create } from 'zustand';
import type { WebAppOption } from './constants';

type WebAppStore = {
  selected: Set<WebAppOption>;
  setSelected: (selected: Set<WebAppOption>) => void;
};

/** @todo store in main process SQLite */
export const useWebAppsStore = create<WebAppStore>((set) => ({
  selected: new Set(),
  setSelected: (selected) => set({ selected }),
}));
