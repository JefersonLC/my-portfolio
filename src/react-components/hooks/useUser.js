import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import * as jwt from 'jose';

export function useUser() {
  const token = getCookie('accessToken');

  const [user, setUser] = useState(undefined);
  const [error, setError] = useState('');

  useEffect(() => {
    jwt
      .jwtVerify(
        token,
        new TextEncoder().encode('CharlesJefersonLimayCabello21')
      )
      .then(({ payload }) => setUser(payload))
      .catch((err) => setError('Error'));
  }, [token]);

  return { user, errorMessage: error };
}
