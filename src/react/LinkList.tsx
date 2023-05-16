import { useMenu } from './store/menu';

export default function LinkList() {
  const { isVisible, hideMenu } = useMenu();

  function hide() {
    if (!isVisible) return;

    hideMenu();
  }

  const links = [
    {
      href: '#',
      children: 'Home',
    },
    {
      href: '#',
      children: 'About',
    },
  ];

  return (
    <>
      {links.map(({ href, children }) => (
        <a
          key={children}
          href={href}
          className='sm:ms-3 sm:hover:text-gray-300'
          onClick={hide}
        >
          {children}
        </a>
      ))}
    </>
  );
}
