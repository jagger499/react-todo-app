import React from 'react'

const TodoItem = (props) =>{
    return(
        <li>
            <span></span>
                {props.text}
            <span></span>
        </li>
    );
};

export default TodoItem;