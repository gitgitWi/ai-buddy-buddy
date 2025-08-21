import { create } from 'zustand';
import { OPTIONS, Tags, type WebAppOption } from './constants';

type WebAppStore = {
  selected: Set<WebAppOption>;
  setSelected: (selected: Set<WebAppOption>) => void;
};

/** @todo store in main process SQLite */
export const useWebAppsStore = create<WebAppStore>((set) => ({
  selected: new Set(
    OPTIONS.filter((option) => (option.tag as Set<Tags>).has(Tags.Default))
  ),
  setSelected: (selected) => set({ selected }),
}));
