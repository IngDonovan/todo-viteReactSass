import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.scss';

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };