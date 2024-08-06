import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Please enter your email address'),
    password: yup.string().required('Please enter your password')
});

export const addQuizSchema = yup.object().shape({
    title: yup.string().min(5),
    description: yup.string(),
    passMark: yup.string()
});

export const signupSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Please enter your email address'),
    fullName: yup.string().min(5),
    password: yup
        .string()
        .min(8, 'Must contain at least 10 characters')
        .matches(/[0-9]/, 'Must contain at least 1 number')
});