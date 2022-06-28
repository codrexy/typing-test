import React, { createContext, useContext, useState } from "react";

const TypingContext = createContext({
  selectedWords: "",
  selectedTimer: "",
  typedValue: "",
  timer: 0,
  point: "",
  accuracy: "",
  speed: "",
  setTimer: () => {},
  setTypedValue: () => {},
  setSelectedTimer: () => {},
  setSelectedWords: () => {},
  submit: () => {},
});

export const useTypingContext = () => useContext(TypingContext);

export default function TypingContextProvider({ children }) {
  const [selectedWords, setSelectedWords] = useState("");
  const [selectedTimer, setSelectedTimer] = useState("");
  const [typedValue, setTypedValue] = useState("");
  const [point, setPoint] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [timer, setTimer] = useState(0);

  const submit = (listOfWords, setVisible) => {
    // if (selectedTimer > 0) {
    //   setSelectedTimer(0);
    //   return;
    // }
    const typedValueArray = typedValue.toLowerCase().split(" ");
    const listOfWordsArray = listOfWords.toLowerCase().split(" ");
    let correctWords = [];
    for (let i = 0; i < listOfWordsArray.length; i++) {
      for (let j = 0; j < typedValueArray.length; j++) {
        if (listOfWordsArray[i] === typedValueArray[j]) {
          correctWords.push(listOfWordsArray[i]);
        }
      }
    }
    const point = correctWords.length;
    const accuracy = `${Math.floor(
      (correctWords.length / listOfWordsArray.length) * 100
    )}%`;
    const speed = `Finished in ${timer - selectedTimer} seconds`;
    setAccuracy(accuracy);
    setPoint(point);
    setSpeed(speed);
    setVisible(true);
  };

  const value = {
    selectedWords,
    setSelectedWords,
    selectedTimer,
    setSelectedTimer,
    typedValue,
    setTypedValue,
    timer,
    setTimer,
    submit,
    accuracy,
    point,
    speed,
  };

  return (
    <TypingContext.Provider value={value}>{children}</TypingContext.Provider>
  );
}
