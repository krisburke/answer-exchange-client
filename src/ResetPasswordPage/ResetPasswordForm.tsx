import React from 'react';
import { Location } from 'history';
import styled from 'styled-components';
import { Button } from '@blueprintjs/core';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import {
    confirmPasswordValidationRules,
    passwordValidationRules,
} from '../Auth/PasswordRules/passwordValidation';
import { ResetPasswordDto } from '../Auth/authTypes';
import * as actions from '../Auth/authActions';
import TextInputField from '../Common/form/TextInputField';
import { parseQuery } from '../Common/helpers';

interface ComponentProps {
    location?: Location;
    resetPassword: typeof actions.resetPassword;
}

interface ResetPasswordFormValues {
    password: string;
    repeatPassword: string;
}

const StyledResetPasswordForm = styled.div`
    margin: 20px 0;
`;

export const ResetPasswordForm: React.FC<ComponentProps> = ({
    location,
    resetPassword,
}) => {
    const initialValues: ResetPasswordFormValues = {
        password: '',
        repeatPassword: '',
    };

    const validationSchema = Yup.object().shape({
        password: passwordValidationRules,
        repeatPassword: confirmPasswordValidationRules,
    });

    const handleFormSubmit = ({ password }: ResetPasswordFormValues) => {
        const queryString = (location && location.search) || '';
        const queryParams = parseQuery(queryString);
        const { email, token } = queryParams;
        const resetPasswordDto: ResetPasswordDto = { password, email, token };
        return resetPassword(resetPasswordDto);
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            {(formProps: FormikProps<ResetPasswordFormValues>) => {
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
                    <StyledResetPasswordForm>
                        <form onSubmit={handleSubmit}>
                            <TextInputField
                                id="password"
                                label="Password"
                                type="password"
                                value={values.password}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                error={errors.password}
                                touched={touched.password}
                            />
                            <TextInputField
                                id="repeatPassword"
                                label="Confirm Password"
                                type="password"
                                value={values.repeatPassword}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                error={errors.repeatPassword}
                                touched={touched.repeatPassword}
                            />
                            <Button
                                type="submit"
                                text="Reset Password"
                                intent="primary"
                                fill={true}
                                disabled={isSubmitting}
                            />
                        </form>
                    </StyledResetPasswordForm>
                );
            }}
        </Formik>
    );
};
