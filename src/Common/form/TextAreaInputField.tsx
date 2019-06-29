import React, { Component } from 'react';
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

class TextAreaInputField extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange = (event: any) => {
        const { value } = event.target;
        this.props.onChange(this.props.id, value);
    };

    handleBlur = () => {
        this.props.onBlur(this.props.id, true);
    };

    render() {
        const shouldShowError: boolean =
            !!this.props.error && this.props.touched;
        const intent = shouldShowError ? Intent.DANGER : Intent.NONE;

        return (
            <FormGroup label={this.props.label} labelFor={this.props.id}>
                <TextArea
                    id={this.props.id}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                    intent={intent}
                    autoFocus={this.props.autofocus}
                    fill={this.props.fill}
                    rows={this.props.rows}
                />
                {shouldShowError && (
                    <FormFieldError>{this.props.error}</FormFieldError>
                )}
            </FormGroup>
        );
    }
}

export default TextAreaInputField;
