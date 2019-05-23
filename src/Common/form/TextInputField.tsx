import React, { Component } from 'react';
import { FormGroup, InputGroup, Intent } from '@blueprintjs/core';

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

class TextInputField extends Component<Props> {
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
                <InputGroup
                    id={this.props.id}
                    type={this.props.type}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                    intent={intent}
                    autoFocus={this.props.autofocus}
                    disabled={this.props.disabled}
                />
                {shouldShowError && (
                    <div style={styles.error}>{this.props.error}</div>
                )}
            </FormGroup>
        );
    }
}

const styles = {
    error: { color: 'red', marginTop: '.5rem' },
};

export default TextInputField;
