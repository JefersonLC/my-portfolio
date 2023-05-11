// import { create } from 'zustand';

// interface MenuState {
//   isVisible: boolean;
//   showMenu: () => void;
//   hideMenu: () => void;
// }

// export const useMenu = create<MenuState>()((set) => {
//   const body = document.getElementById('body') as HTMLBodyElement;

//   return {
//     isVisible: false,
//     showMenu: () => {
//       set((state) => ({ isVisible: true }));
//       body.classList.add('overflow-hidden');
//     },
//     hideMenu: () => {
//       set((state) => ({ isVisible: false }));
//       body.classList.remove('overflow-hidden');
//     },
//   };
// });
