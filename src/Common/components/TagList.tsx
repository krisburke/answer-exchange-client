import React from 'react';
import styled from 'styled-components';
import { Tag } from '../../Question/questionTypes';

interface Props {
    tags?: Tag[];
}

const StyledTagList = styled.span`
    display: inline-flex;
    justify-content: space-around;
`;

const StyledTag = styled.span`
    background-color: #e1ecf4;
    padding: 3px;
    margin-right: 5px;
`;

export const TagList = ({ tags }: Props) => {
    return (
        <StyledTagList>
            {tags &&
                tags.map(tag => (
                    <StyledTag key={tag.uuid}>{tag.slug}</StyledTag>
                ))}
        </StyledTagList>
    );
};
