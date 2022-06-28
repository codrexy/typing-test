import React, { useEffect } from "react";
import { generateDommyText } from "../../helper/generatedData";
import "./Test.css";
import Button from "../../components/Button/Button";
import { useTypingContext } from "../../context/TypingContext";
import Modal from "./components/modal/Modal";

function Test() {
  const {
    selectedWords,
    selectedTimer,
    setSelectedTimer,
    submit,
    setTimer,
    typedValue,
    setTypedValue,
  } = useTypingContext();

  const [listOfWords] = React.useState(
    selectedWords?.toLowerCase() || generateDommyText()
  );

  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    if (selectedTimer === "") {
      setSelectedTimer(120);
      setTimer(120);
    }
    if (selectedTimer === 0) {
      submit(listOfWords, setVisible);
    }
    const interval = setInterval(() => {
      if (selectedTimer > 0) {
        setSelectedTimer(selectedTimer - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTimer]);

  return (
    <>
      <div className="hero-bg">
        <div className="welcome-card">
          <div className="write-text-card">
            <h1 className="title">Type these words below.</h1>
            <div>
              <p className="paragraph">{listOfWords}</p>
            </div>
          </div>
          <div className="text-card">
            <h1 className="title">Take test here.</h1>
            <div style={{ height: 10 }} />
            <p className="paragraph">{selectedTimer} seconds left</p>
            <div style={{ height: 15 }} />
            <div>
              <textarea
                className="text-input centered"
                placeholder="Type the words on your left here."
                rows={13}
                value={typedValue}
                onChange={(e) => setTypedValue(e.target.value)}
                //   cols={50}
              />
            </div>
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <Button
                text={"Submit"}
                onClick={() => submit(listOfWords, setVisible)}
              />
            </div>
          </div>
        </div>
      </div>
      {visible && <Modal visible={visible} setVisible={setVisible} />}
    </>
  );
}

export default Test;
