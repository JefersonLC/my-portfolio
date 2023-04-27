import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import * as jwt from 'jose';

export function useUser() {
  const token = getCookie('accessToken');

  const [payload, setPayload] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    jwt
      .jwtVerify(
        token,
        new TextEncoder().encode('CharlesJefersonLimayCabello21')
      )
      .then(({ payload }) => setPayload(payload))
      .catch((err) => setError('Error al inicio de sesión'));
  }, [token]);

  return { payload, errorMessage: error };
}
