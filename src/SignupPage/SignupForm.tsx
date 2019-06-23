import React from 'react';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { SignupPageProps } from './SignupPageContainer';
import { SignupDto } from '../Auth/authTypes';
import styles from './SignupForm.module.css';
import TextInputField from '../Common/form/TextInputField';
import { Button } from '@blueprintjs/core';
import {
    confirmPasswordValidationRules,
    passwordValidationRules,
} from '../Auth/PasswordRules/PasswordRules';

interface SignupFormValues {
    email: string;
    username: string;
    password: string;
    repeatPassword: string;
}

export const SignupForm = ({ signup }: SignupPageProps) => {
    const initialValues: SignupFormValues = {
        email: '',
        username: '',
        password: '',
        repeatPassword: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required.'),
        username: Yup.string().required('Username is required.'),
        password: passwordValidationRules,
        repeatPassword: confirmPasswordValidationRules,
    });

    const handleFormSubmit = ({
        email,
        password,
        username,
    }: SignupFormValues) => {
        const signupDto: SignupDto = { email, password, username };
        return signup(signupDto);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
        >
            {(formProps: FormikProps<SignupFormValues>) => {
                const {
                    handleSubmit,
                    errors,
                    touched,
                    isSubmitting,
                    values,
                    setFieldValue,
                    setFieldTouched,
                } = formProps;

                return (
                    <div className={styles.signupForm}>
                        <form onSubmit={handleSubmit}>
                            <TextInputField
                                id="email"
                                label="Email"
                                value={values.email}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                error={errors.email}
                                touched={touched.email}
                            />
                            <TextInputField
                                id="username"
                                label="Username"
                                value={values.username}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                error={errors.username}
                                touched={touched.username}
                            />
                            <TextInputField
                                id="password"
                                type="password"
                                label="Password"
                                value={values.password}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                error={errors.password}
                                touched={touched.password}
                            />
                            <TextInputField
                                id="repeatPassword"
                                label="Repeat Password"
                                type="password"
                                value={values.repeatPassword}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                error={errors.repeatPassword}
                                touched={touched.repeatPassword}
                            />
                            <Button
                                type="submit"
                                text="Submit"
                                intent="primary"
                                fill={true}
                                disabled={isSubmitting}
                            />
                        </form>
                    </div>
                );
            }}
        </Formik>
    );
};
