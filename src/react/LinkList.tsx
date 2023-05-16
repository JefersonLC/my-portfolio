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
        <a href={href} className='sm:ms-3' onClick={hide}>
          {children}
        </a>
      ))}
    </>
  );
}
