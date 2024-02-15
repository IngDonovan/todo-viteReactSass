import React from "react";


function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if(change.key === 'TASK_V1') {
                console.log('hubo cambios en TASK_V1');
                setStorageChange(true);
            }
        });

        return (
            <WrappedComponent 
                show={storageChange}
                toggleShow={setStorageChange}
            />
        );
    }
}



export { withStorageListener };