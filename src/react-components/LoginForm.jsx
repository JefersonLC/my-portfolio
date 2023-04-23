import { Form, Formik, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../utils/schemas';
import { loginInitValues } from '../utils/values';
import { loginFormFields } from '../utils/forms';
import { useState } from 'react';

export default function LoginForm() {
  const [error, setError] = useState(null);

  async function handleSubmit(values) {
    try {
      const response = await fetch(
        'http://localhost:8000/api/users',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      location.replace('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Formik
      initialValues={loginInitValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
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
    </Formik>
  );
}
