import React, { FormEvent, useState } from 'react';
import RichTextEditor from 'react-quill';
import { Button } from '@blueprintjs/core';
import get from 'lodash/get';
import styled from 'styled-components';
import { AnswerSectionProps } from './AnswerSectionContainer';

const StyledEditor = styled(RichTextEditor)`
    height: 250px;
`;

export const CreateAnswerForm: React.FC<AnswerSectionProps> = ({
    createAnswer,
    question,
    auth,
}) => {
    const authorUserUuid = get(auth, 'userUuid') || '';
    const questionUuid = get(question, 'uuid');
    const [text, setText] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log('creating answer: ', text);
        createAnswer({ text, authorUserUuid, questionUuid });
    };

    const handleChange = (value: string) => setText(value);

    return (
        <div style={{ padding: '25px ' }}>
            <h2>Your Answer</h2>
            <form onSubmit={handleSubmit}>
                <StyledEditor
                    theme="snow"
                    value={text}
                    onChange={handleChange}
                />
                <div style={{ marginTop: '65px' }}>
                    <Button
                        type="submit"
                        text="Post Your Answer"
                        intent="primary"
                    />
                </div>
            </form>
        </div>
    );
};
