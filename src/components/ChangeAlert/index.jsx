import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.scss';

function ChangeAlert({sincronize}) {
    const {
        show,
        toggleShow, 
    } = useStorageListener(sincronize);

    if (show) {
        return (
            <div className="alertSync-bg">
                <div className="alertSync-container">
                    <p>Actualiza porque hubo cambios!</p>
                    <button
                        onClick={() => toggleShow(false)}
                    >
                        Refrescar
                    </button>
                </div>
            </div>
        )
    } else {
        return null;
    }
};


export { ChangeAlert };