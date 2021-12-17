import React from 'react'
import styles from './createTodoItem.module.css';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import { mdiDelete } from '@mdi/js';

const TodoItem = (props) =>{
    const { text, completed, onComplete, onDelete } = props;
    const styleCompleted = () => (!completed)? '' : styles['li-check--activate'];
    return(
        <li className={styles.li}>
            <Icon path={mdiCheck} size={1} onClick={onComplete} className={styles.icon}/>
                <p className={styleCompleted()}>
                    {text}
                </p>
            <Icon path={mdiDelete} size={1} onClick={onDelete} className={styles.icon}/>
        </li>
    );
};

export default TodoItem;