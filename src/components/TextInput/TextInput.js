import React from "react";
import "./styles.css";

function TextInput({ value, setValue, type = "text" }) {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      className="text-input"
      placeholder="Paste your text here"
    />
  );
}

export default TextInput;
