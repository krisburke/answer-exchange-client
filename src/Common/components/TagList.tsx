import React from 'react';
import styled from 'styled-components';
import { Tag } from '../../Question/questionTypes';

interface Props {
    tags?: Tag[];
}

const Tag = styled.span`
    background-color: #e1ecf4;
    padding: 3px;
    margin-right: 5px;
`;

export const TagList = ({ tags }: Props) => {
    return (
        <div>
            {tags && tags.map(tag => <Tag key={tag.uuid}>{tag.slug}</Tag>)}
        </div>
    );
};
