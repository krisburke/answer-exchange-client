import React from 'react';
import styled from 'styled-components';

interface StyledCountCellProps {
    isOutlined?: boolean;
}

const StyledCountCell = styled.div<StyledCountCellProps>`
    min-width: 50px;
    height: 55px;
    padding: 6px;
    text-align: center;
    ${({ isOutlined }) =>
        isOutlined &&
        `border: 1px solid green;
     border-radius: 3px;`}
`;

const CountNumber = styled.div`
    font-size: 1.4em;
`;

const CountText = styled.div``;

interface Props {
    countNumber: number;
    countText: string;
    isOutlined?: boolean;
    isFilled?: boolean; // TODO: handle this style
}

export const CountCell: React.FC<Props> = ({
    countNumber,
    countText,
    isOutlined,
}) => (
    <StyledCountCell isOutlined={isOutlined}>
        <CountNumber>{countNumber}</CountNumber>
        <CountText>{countText}</CountText>
    </StyledCountCell>
);
