import React from 'react'
import styles from './createTodoItem.module.css';
import Icon from '@mdi/react';
import { mdiCheckboxMarkedCirclePlusOutline } from '@mdi/js';

const CreateTodoItem = ({ setOpenModal }) =>{
    const onClickButton = () => {setOpenModal(prevState => !prevState)};
    return(
    <div className={styles['z-index']}>
        <button className={styles.button}>
            <Icon path={mdiCheckboxMarkedCirclePlusOutline} 
                  size={1}
                  onClick={onClickButton}/>
        </button>
    </div>
    );
};

export default CreateTodoItem;