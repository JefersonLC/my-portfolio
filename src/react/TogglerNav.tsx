import { useMenu } from './store/menu';

export default function TogglerNav() {
  const { showMenu, hideMenu, isVisible } = useMenu();

  return (
    <button
      onClick={isVisible ? hideMenu : showMenu}
      className='dark:text-gray-100 dark:hover:text-green'
    >
      <i className='fa-solid fa-bars' />
    </button>
  );
}
