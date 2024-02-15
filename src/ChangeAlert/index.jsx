import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div>
                <p>Actualiza porque hubo cambios!</p>
                <button
                    onClick={() => toggleShow(false)}
                >
                    Refrescar
                </button>
            </div>
        )
    } else {
        return null;
    }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };