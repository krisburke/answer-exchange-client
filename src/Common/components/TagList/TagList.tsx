import React from 'react';
import { Tag } from '../../../Question/questionTypes';
import styles from './TagList.module.css';

interface Props {
    tags?: Tag[];
}

export const TagList = ({ tags }: Props) => {
    return (
        <div className={styles.tags}>
            {tags &&
                tags.map(tag => (
                    <span className={styles.tag} key={tag.uuid}>
                        {tag.slug}
                    </span>
                ))}
        </div>
    );
};
