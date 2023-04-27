import { useUser } from './hooks/useUser';

export default function Button() {
  const { payload } = useUser();

  return <button>{payload.id}</button>;
}
