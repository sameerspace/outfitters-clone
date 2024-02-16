import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name should be more than 2 characters')
    .required('Please enter your first name'),
  lastName: Yup.string().min(2, 'Last name should be more than 2 characters').required('Please enter your last name'),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required('Password should be more than 8 characters'),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required('Please enter a valid email'),
  password: Yup.string().min(8, 'Password should be more than 8 characters').required('Please enter a valid password'),
});
