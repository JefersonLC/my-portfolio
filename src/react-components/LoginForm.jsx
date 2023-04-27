import { Form, Formik, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../utils/schemas';
import { loginInitValues } from '../utils/values';
import { loginFormFields } from '../utils/forms';
import { useState } from 'react';
import { setCookie } from 'cookies-next';
import { useUser } from './hooks/useUser';

export default function LoginForm() {
  const [error, setError] = useState('');
  const { payload, errorMessage } = useUser();

  async function handleSubmit(values) {
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setCookie('accessToken', data.accessToken, {
        sameSite: 'strict',
      });

      location.replace('/');
    } catch (error) {
      setError('Login error');
    }
  }

  return (
    <Formik
      initialValues={loginInitValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <>
        {error && <div>{error}</div>}
        <Form>
          {loginFormFields.map((field) => (
            <div key={field.name}>
              <Field
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
              />
              <ErrorMessage name={field.name} />
            </div>
          ))}
          <button type='submit'>Ok</button>
        </Form>
      </>
    </Formik>
  );
}
