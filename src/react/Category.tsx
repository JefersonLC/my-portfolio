interface CategoryProps {
  children: string;
}

export default function Category({ children }: CategoryProps) {
  return (
    <span className='rounded-full py-1 px-3 bg-gray-200 text-gray-100 text-xs'>
      {children}
    </span>
  );
}
