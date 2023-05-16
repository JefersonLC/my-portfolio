import { useMenu } from './store/menu';

export default function TogglerNav() {
  const { showMenu, hideMenu, isVisible } = useMenu();

  return (
    <button
      onClick={isVisible ? hideMenu : showMenu}
      className='dark:text-white dark:hover:text-gray-300'
    >
      <i className='fa-solid fa-bars' />
    </button>
  );
}
