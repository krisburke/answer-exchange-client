import React from 'react';
import styled from 'styled-components';

const AddCommentLink = styled.a`
    color: darkgray;
`;

export const AddComment = () => {
    return (
        <div>
            <AddCommentLink>add a comment</AddCommentLink>
        </div>
    );
};
