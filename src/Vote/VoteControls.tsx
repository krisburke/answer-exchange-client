import React from 'react';
import styled from 'styled-components';
import { Icon } from '@blueprintjs/core';
import { VoteTarget } from './voteTypes';

const VoteCount = styled.div`
    text-align: center;
    font-size: 2em;
`;

interface VoteControlsProps {
    voteCount: number;
    voteTarget: VoteTarget;
}

// TODO add upvote / downvote fns based on vote target

export const VoteControls = ({
    voteCount = 0,
    voteTarget,
}: VoteControlsProps) => (
    <div>
        <Icon icon={'caret-up'} iconSize={30} />
        <VoteCount>{voteCount}</VoteCount>
        <Icon icon={'caret-down'} iconSize={30} />
    </div>
);
