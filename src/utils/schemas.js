import { string, number, object } from 'yup';

export const loginSchema = object({
  email: string()
    .email('Invalid format')
    .required('Required')
    .typeError('Must be a text'),
  password: string()
    .min(8, 'Min length is 8')
    .required('Required')
    .typeError('Must be a text'),
});
