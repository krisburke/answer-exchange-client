import React from 'react';
import { Icon } from '@blueprintjs/core';
import { VoteTarget } from './voteTypes';
import styles from './VoteControls.module.css';

interface VoteControlsProps {
    voteCount: number;
    voteTarget: VoteTarget;
}

// TODO add upvote / downvote fns based on vote target

export const VoteControls = ({ voteCount, voteTarget }: VoteControlsProps) => (
    <div>
        <Icon icon={'caret-up'} iconSize={30} />
        <div className={styles.voteCount}>{voteCount}</div>
        <Icon icon={'caret-down'} iconSize={30} />
    </div>
);
