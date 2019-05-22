import React from 'react';
import { HomePageProps } from './HomePageContainer';

export const HomePage: React.FC<HomePageProps> = ({
    question,
    getQuestions,
}) => {
    return (
        <>
            <h1>Welcome to Home</h1>
        </>
    );
};
