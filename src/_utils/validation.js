// Core
import * as yup from 'yup';

export const validateLogin = yup.object().shape({
    email: yup.string()
        .email('Invalid email format')
        .required('Required field'),
    password: yup.string()
        .required('Required field')
        .min(3, 'Password must be at less 3 characters'),
})