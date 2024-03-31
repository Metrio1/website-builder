import { useFormik } from 'formik';
import * as Yup from 'yup';

export const regValidation = Yup.object({
  firstName: Yup.string()
    .min(4, 'Must be 4 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .min(4, 'Must be 4 characters or more')
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  login: Yup.string()
    .min(4, 'Must be 4 characters or more')
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .max(32, 'Must be 32 characters or less')
    .required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
