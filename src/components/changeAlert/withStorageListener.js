import React, { useState, useEffect } from 'react'

const  withStorageListener = (WrappedComponent) => {
    return (props) => {
        const [storageChange, setStoragechange] = useState(false);

        useEffect(() => {
            const onChange = (change) => {
              if (change.key === "TODOS_V1") {
                console.log("Hubo cambios en TODOS_V1");
                setStoragechange(true);
              }
            };
      
            window.addEventListener("storage", onChange);
      
            return () => {
              window.removeEventListener("storage", onChange);
            };
        }, []);
        
        const toggleShow = () => {
            setStoragechange(false);
            props.sincronize();
        }
        
        return <WrappedComponent 
                    show={storageChange}
                    toggleShow={toggleShow}
                />
    }
}

export default withStorageListener;