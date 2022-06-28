import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { useTypingContext } from "../../../../context/TypingContext";
import "./style.css";

const Modal = ({ visible, setVisible }) => {
  const navigate = useNavigate();
  const { point, accuracy, speed } = useTypingContext();
  return (
    <div
      className="modal-foreground"
      style={{ display: visible ? "flex" : "none" }}
    >
      <div className="modal-contents">
        <div className="img-section">
          <img
            src={require("../../../../assets/images/Typing.gif")}
            alt=""
            className="image"
          />
        </div>
        <div className="text-section">
          <div className="container">
            <h1 className="title">You have finished the test.</h1>
            <p className="paragraph">You have typed {point} words correctly.</p>
            <p className="paragraph">Accuracy: {accuracy}.</p>
            <p className="paragraph">Speed: {speed}.</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <Button
                text={"Close"}
                onClick={() => {
                  setVisible(false);
                  navigate("/");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
