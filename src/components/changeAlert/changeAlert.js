import React from 'react'
import withStorageListener from './withStorageListener';

const ChangeAlert = ({ show, toggleShow }) => {
    if (show) {
        return (<>
            <p>hubo cambios</p>
            <button onClick={()=>{
                toggleShow(false);
            }}> 
                como que paso  esto
            </button>
        </>
        )
    } else {
        return <></>
    } 
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export default ChangeAlertWithStorageListener;