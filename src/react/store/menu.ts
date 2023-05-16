import { create } from 'zustand';

interface MenuState {
  isVisible: boolean;
  showMenu: () => void;
  hideMenu: () => void;
}

export const useMenu = create<MenuState>()((set) => {
  return {
    isVisible: false,
    showMenu: () => {
      set((state) => ({ isVisible: true }));
    },
    hideMenu: () => {
      set((state) => ({ isVisible: false }));
    },
  };
});
