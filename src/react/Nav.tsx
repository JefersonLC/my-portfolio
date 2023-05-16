import { useEffect } from 'react';
import LinkList from './LinkList';
import { useMenu } from './store/menu';

export default function Nav() {
  const { isVisible, hideMenu } = useMenu();

  useEffect(() => {
    const maxWidth = 640; //px

    window.onresize = () => {
      const currentWidth = window.innerWidth; //px

      if (currentWidth > maxWidth) {
        hideMenu();
      }
    };
  }, []);

  const menuVisibleStyle = isVisible ? 'top-20' : '-top-20';

  return (
    <nav
      className={`fixed w-4/5 left-1/2 -translate-x-1/2 py-2 px-4 rounded-md 
      backdrop-blur-3xl border-2 flex flex-col gap-2 border-zinc-800 ${menuVisibleStyle}
      transition-all ease-in-out duration-500 sm:hidden`}
    >
      <LinkList />
    </nav>
  );
}
