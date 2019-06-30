import React from 'react';
import styled from 'styled-components';
import { Button } from '@blueprintjs/core';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { ForgotPasswordDto } from '../Auth/authTypes';
import TextInputField from '../Common/form/TextInputField';
import * as actions from '../Auth/authActions';

interface ForgotPasswordFormValues {
    email: string;
}

interface ComponentProps {
    submitForgotPassword: typeof actions.submitForgotPassword;
}

const StyledForgotPasswordForm = styled.div`
    margin: 20px 0;
`;

export const ForgotPasswordForm: React.FC<ComponentProps> = ({
    submitForgotPassword,
}) => {
    const initialValues: ForgotPasswordFormValues = {
        email: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required.')
            .email('Must be a valid email address.'),
    });

    const handleFormSubmit = ({ email }: ForgotPasswordFormValues) => {
        const forgotPasswordDto: ForgotPasswordDto = { email };
        return submitForgotPassword(forgotPasswordDto);
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            {(formProps: FormikProps<ForgotPasswordFormValues>) => {
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
                    <StyledForgotPasswordForm>
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
                            <Button
                                type="submit"
                                text="Submit"
                                intent="primary"
                                fill={true}
                                disabled={isSubmitting}
                            />
                        </form>
                    </StyledForgotPasswordForm>
                );
            }}
        </Formik>
    );
};
