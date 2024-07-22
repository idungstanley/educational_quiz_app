import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Please enter your email address'),
    password: yup.string().required('Please enter your password')
});