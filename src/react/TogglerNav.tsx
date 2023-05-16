import { useMenu } from './store/menu';

export default function TogglerNav() {
  const { showMenu, hideMenu, isVisible } = useMenu();

  return (
    <button
      onClick={isVisible ? hideMenu : showMenu}
      className='hover:text-white'
    >
      <i className='fa-solid fa-bars' />
    </button>
  );
}
