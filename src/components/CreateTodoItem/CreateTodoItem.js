import React from 'react'
import styles from './createTodoItem.module.css';
import Icon from '@mdi/react';
import { mdiCheckboxMarkedCirclePlusOutline } from '@mdi/js';

const CreateTodoItem = () =>{
    return(
    <>
        <button className={styles.button}>
            <Icon path={mdiCheckboxMarkedCirclePlusOutline} 
                  size={1}
                  onClick={() => alert('hizo click el vergas')}/>
        </button>
    </>
    );
};

export default CreateTodoItem;