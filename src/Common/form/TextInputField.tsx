import React from 'react';
import { FormGroup, InputGroup, Intent } from '@blueprintjs/core';
import { FormFieldError } from './FormFieldError';

// TODO: Replace usage with component from formik-blueprintjs-components lib

interface Props {
    id: string;
    label: string;
    type?: string;
    value: any;
    onChange: any;
    onBlur: any;
    error: any;
    touched: any;
    autofocus?: boolean;
    disabled?: boolean;
}

function TextInputField(props: Props) {
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
            <InputGroup
                id={props.id}
                type={props.type}
                onChange={handleChange}
                onBlur={handleBlur}
                value={props.value}
                intent={intent}
                autoFocus={props.autofocus}
                disabled={props.disabled}
            />
            {shouldShowError && <FormFieldError>{props.error}</FormFieldError>}
        </FormGroup>
    );
}

export default TextInputField;
