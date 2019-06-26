import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { Button } from '@blueprintjs/core';
import TextInputField from '../Common/form/TextInputField';
import * as actions from '../Auth/authActions';

interface Props {
    login: typeof actions.login;
}

interface LoginFormValues {
    email: string;
    password: string;
}

const StyledLoginForm = styled.div`
    margin: 20px 0;
`;

export const LoginForm = ({ login }: Props) => {
    const initialValues: LoginFormValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required.'),
        password: Yup.string().required('Password is required.'),
    });

    const handleFormSubmit = ({ email, password }: LoginFormValues) => {
        return login({ email, password });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
        >
            {(formProps: FormikProps<LoginFormValues>) => {
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
                    <StyledLoginForm>
                        <form onSubmit={handleSubmit}>
                            <TextInputField
                                id="email"
                                label="Email"
                                type="email"
                                value={values.email}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                error={errors.email}
                                touched={touched.email}
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
                            <Button
                                type="submit"
                                text="Login"
                                intent="primary"
                                fill={true}
                                disabled={isSubmitting}
                            />
                        </form>
                    </StyledLoginForm>
                );
            }}
        </Formik>
    );
};
