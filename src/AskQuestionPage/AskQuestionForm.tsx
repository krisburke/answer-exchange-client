import React from 'react';
import Yup from 'yup';
import { Formik } from 'formik';

import { CreateQuestionDto } from '../Question/questionTypes';
import { AskQuestionPageProps } from './AskQuestionPageContainer';
import TextInputField from '../Common/form/TextInputField';
import TextAreaInputField from '../Common/form/TextAreaInputField';
import { Button } from '@blueprintjs/core';

export const AskQuestionForm = ({ createQuestion }: AskQuestionPageProps) => {
    const initialValues: CreateQuestionDto = {
        title: '',
        text: '',
        authorUserUuid: '', // FIXME
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        text: Yup.string().required('Question body is required.'),
    });

    const handleFormSubmit = (props: CreateQuestionDto) => {
        console.log('creating question');
        console.log(props);
        // return createQuestion({ title, text, authorUserUuid });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
        >
            {(formProps: any) => {
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
                    <form onSubmit={handleSubmit}>
                        <TextInputField
                            id="title"
                            label="Title"
                            value={values.title}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.title}
                            touched={touched.title}
                        />
                        <TextAreaInputField
                            id="text"
                            label="Body"
                            value={values.text}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.title}
                            touched={touched.title}
                        />
                        <Button
                            type="submit"
                            text="Post Your Question"
                            intent="primary"
                            disabled={isSubmitting}
                        />
                    </form>
                );
            }}
        </Formik>
    );
};
