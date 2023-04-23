import { string, number, object } from 'yup';

export const loginSchema = object({
  id: string()
    .min(2, 'Too Short')
    .max(100, 'Too Long')
    .required('Required')
    .typeError('Must be a text'),
  name: string()
    .min(2, 'Too Short')
    .max(100, 'Too Long')
    .required('Required')
    .typeError('Must be a text'),
  lastname: string()
    .min(2, 'Too Short')
    .max(100, 'Too Long')
    .required('Required')
    .typeError('Must be a text'),
  age: number()
    .integer('Must be an integer')
    .positive('Must be greater than 0')
    .required('Required')
    .typeError('Must be a number'),
  email: string()
    .email('Invalid format')
    .required('Required')
    .typeError('Must be a text'),
  password: string()
    .min(8, 'Min length is 8')
    .required('Required')
    .typeError('Must be a text'),
});
