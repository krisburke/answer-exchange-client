import React, { Component } from 'react';
import { Spinner } from '@blueprintjs/core';
import { HomePageProps } from './HomePageContainer';

export class HomePage extends Component<HomePageProps> {
    componentDidMount() {
        this.props.getQuestions();
    }

    render() {
        const {
            question: { isLoading, items },
        } = this.props;

        if (isLoading || !items) {
            return <Spinner />;
        }

        return (
            <>
                <h1>Welcome to Home</h1>
                {items.map(item => (
                    <h2 key={item.uuid}>{item.title}</h2>
                ))}
            </>
        );
    }
}
