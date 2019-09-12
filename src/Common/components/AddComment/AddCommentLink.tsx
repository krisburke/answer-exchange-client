import React from 'react';
import styled from 'styled-components';

const StyledAddCommentLink = styled.a`
    color: darkgray;
`;

export const AddCommentLink = () => {
    return (
        <div>
            <StyledAddCommentLink>add a comment</StyledAddCommentLink>
        </div>
    );
};
