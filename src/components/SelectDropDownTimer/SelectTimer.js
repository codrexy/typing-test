import React from "react";
import { useTypingContext } from "../../context/TypingContext";
import "./style.css";

function SelectTimer() {
  const { selectedTimer, setSelectedTimer } = useTypingContext();
  return (
    <>
      <select
        value={selectedTimer}
        onChange={(e) => {
          setSelectedTimer(e.target.value);
        }}
      >
        <option value="" disabled>
          Select a time duration
        </option>
        <option value="1">1 minute</option>
        <option value="2">2 minutes</option>
        <option value="3">3 minutes</option>
        <option value="4">4 minutes</option>
        <option value="5">5 minutes</option>
      </select>
    </>
  );
}

export default SelectTimer;
