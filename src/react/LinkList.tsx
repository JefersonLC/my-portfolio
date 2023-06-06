import { useMenu } from './store/menu';

export default function LinkList() {
  const { isVisible, hideMenu } = useMenu();

  function hide() {
    if (!isVisible) return;

    hideMenu();
  }

  const links = [
    {
      href: '#projects',
      children: 'Projects',
    },
    {
      href: '#tools',
      children: 'Herramientas',
    },
  ];

  return (
    <>
      {links.map(({ href, children }) => (
        <a
          key={children}
          href={href}
          className='text-gray-100 text-sm hover:text-green sm:ms-10'
          onClick={hide}
        >
          {children}
        </a>
      ))}
    </>
  );
}
