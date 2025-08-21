import { create } from 'zustand';
import { OPTIONS, type WebAppOption } from './constants';

type WebAppStore = {
  selected: WebAppOption[];
  unselected: WebAppOption[];
  toggleSelected: (option: WebAppOption) => void;
  changeOrder: (option: WebAppOption, order: number) => void;
};

const invokeSelected = async (): Promise<Set<string>> =>
  new Set((await window.ipcRenderer?.getSetting('webAppsSelected')) ?? []);

const initSelected = await invokeSelected();

const saveSelected = (selected: string[]) => {
  window.ipcRenderer?.setSetting('webAppsSelected', selected);
};

export const useWebAppsStore = create<WebAppStore>((set) => ({
  selected: OPTIONS.filter((option) => initSelected.has(option.name)),

  unselected: OPTIONS.filter((option) => !initSelected.has(option.name)),

  toggleSelected: (option) =>
    set((prev) => {
      const hasOption = prev.selected.find((val) => val.url === option.url);
      if (hasOption) {
        const selected = prev.selected.filter((val) => val.url !== option.url);
        saveSelected(selected.map(({ name }) => name));

        return {
          selected,
          unselected: [option].concat(prev.unselected),
        };
      }

      const selected = prev.selected.concat(option);
      saveSelected(selected.map(({ name }) => name));

      return {
        selected,
        unselected: prev.unselected.filter((val) => val.url !== option.url),
      };
    }),

  changeOrder: (option, order) =>
    set((prev) => {
      const filtered = prev.selected.filter((val) => val.url !== option.url);
      const selected = filtered
        .slice(0, order)
        .concat(option, filtered.slice(order));
      saveSelected(selected.map(({ name }) => name));

      return {
        selected,
      };
    }),
}));
