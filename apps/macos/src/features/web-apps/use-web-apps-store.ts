import { create } from 'zustand';
import { OPTIONS, Tags, type WebAppOption } from './constants';

type WebAppStore = {
  selected: WebAppOption[];
  unselected: WebAppOption[];
  toggleSelected: (option: WebAppOption) => void;
  changeOrder: (option: WebAppOption, order: number) => void;
};

/** @todo store in main process SQLite */
export const useWebAppsStore = create<WebAppStore>((set) => ({
  selected: OPTIONS.filter((option) =>
    (option.tag as Set<Tags>).has(Tags.Default)
  ),

  unselected: OPTIONS.filter(
    (option) => !(option.tag as Set<Tags>).has(Tags.Default)
  ),

  toggleSelected: (option) =>
    set((prev) => {
      const hasOption = prev.selected.find((val) => val.url === option.url);
      if (hasOption) {
        return {
          selected: prev.selected.filter((val) => val.url !== option.url),
          unselected: [option].concat(prev.unselected),
        };
      }

      return {
        selected: prev.selected.concat(option),
        unselected: prev.unselected.filter((val) => val.url !== option.url),
      };
    }),

  changeOrder: (option, order) =>
    set((prev) => {
      const filtered = prev.selected.filter((val) => val.url !== option.url);

      return {
        selected: filtered
          .slice(0, order)
          .concat(option, filtered.slice(order)),
      };
    }),
}));
