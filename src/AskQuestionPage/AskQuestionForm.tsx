import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button } from '@blueprintjs/core';
import { CreateQuestionDto } from '../Question/questionTypes';
import { AskQuestionPageProps } from './AskQuestionPageContainer';
import TextInputField from '../Common/form/TextInputField';
import TextAreaInputField from '../Common/form/TextAreaInputField';

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
        const { title, text, authorUserUuid } = props;
        console.log('creating question');
        console.log(props);
        return createQuestion({ title, text, authorUserUuid });
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
                            fill={true}
                            rows={15}
                            value={values.text}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.text}
                            touched={touched.text}
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
