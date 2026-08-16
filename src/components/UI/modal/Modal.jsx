import React from "react";
import { createPortal } from "react-dom";
import cl from "./Modal.module.css";

const Modal = ({ children, visible, setVisible }) => {
    const rootClasses = [cl.MyModal];

    if (visible) {
        rootClasses.push(cl.active);
    }

    return createPortal(
        <div
            className={rootClasses.join(" ")}
            onClick={() => setVisible(false)}
        >
            <div
                className={cl.MyModalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    );
};

export default Modal;