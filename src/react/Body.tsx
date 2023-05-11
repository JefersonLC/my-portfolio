import type { ReactNode } from 'react';

interface BodyProps {
  children: ReactNode;
}

export default function Body({ children }: BodyProps) {
  const { isVisible } = useMenu();

  return <body className={isVisible ? 'overflow-hidden' : ''}>{children}</body>;
}
