import React from "react";
import TextInput from "../../../../components/TextInput/TextInput";
import "./style.css";
import { useTypingContext } from "../../../../context/TypingContext";
import Button from "../../../../components/Button/Button";

export default function TextCard({ setDisplay }) {
  const { selectedWords, setSelectedWords } = useTypingContext();
  // console.log(selectedWords);
  return (
    <>
      <div className="text-section">
        <div className="container">
          <h1 className="title">
            Welcome to the best typing accelerating platform!
          </h1>
          <p className="paragraph">
            Please paste in the text you want to test and click start or just
            leave it blank if you dont have any of your choice.
          </p>
          <div className="Text-input-container">
            <TextInput
              type="text"
              value={selectedWords}
              setValue={setSelectedWords}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <Button text={"Next"} onClick={() => setDisplay("TimeSelector")} />
          </div>
        </div>
      </div>
      <div className="img-section">
        <img
          src={require("../../../../assets/images/Typing.gif")}
          alt=""
          className="image"
        />
      </div>
    </>
  );
}
