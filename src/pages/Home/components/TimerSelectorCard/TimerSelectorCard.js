import React from "react";
import "./style.css";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import SelectTimer from "../../../../components/SelectDropDownTimer/SelectTimer";
import { useTypingContext } from "../../../../context/TypingContext";

function TimerSelectorCard({ setDisplay }) {
  const { selectedTimer, setSelectedTimer, setTimer } = useTypingContext();
  const navigate = useNavigate();
  return (
    <>
      <div className="text-section">
        <div className="container">
          <h1 className="title">
            Welcome to the best typing accelerating platform!
          </h1>
          <p className="paragraph">
            Please select how long you want the test to last or leave it like
            that if you want a default time.
          </p>
          <div className="text-input-container">
            <SelectTimer />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <Button text={"Back"} onClick={() => setDisplay("TextCard")} />
            <Button
              text={"Start"}
              onClick={() => {
                switch (selectedTimer) {
                  case "1":
                    setSelectedTimer(60);
                    setTimer(60);
                    break;
                  case "2":
                    setSelectedTimer(120);
                    setTimer(120);
                    break;
                  case "3":
                    setSelectedTimer(180);
                    setTimer(180);
                    break;
                  case "4":
                    setSelectedTimer(240);
                    setTimer(240);
                    break;
                  case "5":
                    setSelectedTimer(300);
                    setTimer(300);
                    break;
                  default:
                    setSelectedTimer(120);
                    setTimer(120);
                    break;
                }
                navigate("/test");
              }}
            />
          </div>
        </div>
      </div>
      <div className="img-section">
        <img
          src={require("../../../../assets/images/Wristwatch.gif")}
          alt=""
          className="image"
        />
      </div>
    </>
  );
}

export default TimerSelectorCard;
