import React, { useEffect } from "react";
import "./Modal.scss";
import { Portal } from "react-portal";
import { CSSTransition } from "react-transition-group";

export default function Modal(props) {
  useEffect(() => {
    const root = document.getElementById("root");

    if (props.isOpen) {
      document.body.style.overflowY = "hidden";
      root.style.filter = "blur(32px)";
      root.style.zIndex = "10";
    } else {
      document.body.style.overflowY = "auto";
      root.style.filter = "none";
    }

    return () => {
      const root = document.getElementById("root");
      document.body.style.overflowY = "auto";
      root.style.filter = "none";
    };
  });

  return (
    <Portal>
      <CSSTransition
        in={props.isOpen}
        timeout={200}
        unmountOnExit
        classNames="modal-animation"
      >
        <div className="modal__wrapper" id="modal">
          <div className="modal">
            {props.children}
            <div className="modal__swiper" onTouchMove={props.onClose}>
              <div className="swipe"></div>
            </div>
            <button className="modal__closer" onClick={props.onClose}>
              <img src="/images/Union.svg" alt="close" />
            </button>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
}
