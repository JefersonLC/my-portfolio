import { useMenu } from './store/menu';

export default function LinkList() {
  const { isVisible, hideMenu } = useMenu();

  function hide() {
    if (!isVisible) return;

    hideMenu();
  }

  const links = [
    {
      href: '#about',
      children: 'About',
    },
    {
      href: '#projects',
      children: 'Projects',
    },
  ];

  return (
    <>
      {links.map(({ href, children }) => (
        <a
          key={children}
          href={href}
          className='text-gray text-sm hover:text-green sm:ms-10'
          onClick={hide}
        >
          {children}
        </a>
      ))}
    </>
  );
}
