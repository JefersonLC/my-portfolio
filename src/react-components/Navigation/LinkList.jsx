import { deleteCookie } from 'cookies-next';
import { useUser } from '../hooks/useUser';

export default function LinkList() {
  const { user } = useUser();

  function logOutHandler() {
    deleteCookie('accessToken', {
      sameSite: 'strict'
    })
    location.replace('/')
  }

  return (
    <>
      <div>
        <a href='/'>Home</a>
        {!user 
          ? <a href='/login'>login</a> 
          : <a href='/profile'>Profile</a>
        }
      </div>
      {user && <button onClick={logOutHandler}>LogOut</button>}
      {user && <button>Add new Image</button>}
    </>
  );
}
