import React from 'react';
import { FormGroup, TextArea, Intent } from '@blueprintjs/core';
import { FormFieldError } from './FormFieldError';

// TODO: Replace usage with component from formik-blueprintjs-components lib

interface Props {
    id: string;
    label: string;
    value: any;
    onChange: any;
    onBlur: any;
    error: any;
    touched: any;
    autofocus?: boolean;
    fill?: boolean;
    rows?: number;
}

function TextAreaInputField(props: Props) {
    const handleChange = (event: any) => {
        const { value } = event.target;
        props.onChange(props.id, value);
    };

    const handleBlur = () => {
        props.onBlur(props.id, true);
    };

    const shouldShowError: boolean = !!props.error && props.touched;
    const intent = shouldShowError ? Intent.DANGER : Intent.NONE;

    return (
        <FormGroup label={props.label} labelFor={props.id}>
            <TextArea
                id={props.id}
                onChange={handleChange}
                onBlur={handleBlur}
                value={props.value}
                intent={intent}
                autoFocus={props.autofocus}
                fill={props.fill}
                rows={props.rows}
            />
            {shouldShowError && <FormFieldError>{props.error}</FormFieldError>}
        </FormGroup>
    );
}

export default TextAreaInputField;
