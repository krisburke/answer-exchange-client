import * as Yup from 'yup';

export const passwordValidationRules = Yup.string()
    .min(8, 'Password should be at least 8 characters.')
    .max(128, 'Password should be at most 128 characters.')
    .matches(
        /(?=.*?[A-Z])/,
        'Password must contain as least one upper case letter.',
    )
    .matches(
        /(?=.*?[a-z])/,
        'Password must contain as least one lower case letter.',
    )
    .matches(/(?=.*?[0-9])/, 'Password must contain as least one digit.')
    .matches(
        /(?=.*?[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/,
        'Password must contain as least one symbol.',
    )
    .required('Password is required.');

export const confirmPasswordValidationRules = Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match.')
    .required('Confirm password is required.');
