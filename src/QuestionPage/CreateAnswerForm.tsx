import React, { FormEvent, useState } from 'react';
import RichTextEditor from 'react-quill';
import { Button } from '@blueprintjs/core';
import 'react-quill/dist/quill.snow.css';
import { QuestionPageProps } from './QuestionPageContainer';
import get from 'lodash/get';

export const CreateAnswerForm: React.FC<QuestionPageProps> = ({
    createAnswer,
    question,
}) => {
    const authorUserUuid = ''; // FIXME
    const questionUuid = get(question, 'current.uuid');
    const [text, setText] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log('creating answer: ', text);
        createAnswer({ text, authorUserUuid, questionUuid });
    };

    const handleChange = (value: string) => setText(value);

    return (
        <form onSubmit={handleSubmit}>
            <RichTextEditor theme="snow" value={text} onChange={handleChange} />
            <Button type="submit" text="Post Your Answer" intent="primary" />
        </form>
    );
};
