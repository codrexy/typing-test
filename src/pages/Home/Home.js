import React from "react";
import TextCard from "./components/TextCard/TextCard";
import TimerSelectorCard from "./components/TimerSelectorCard/TimerSelectorCard";
import "./style.css";

function Home() {
  const [display, setDisplay] = React.useState("TextCard");
  return (
    <div className="hero-bg">
      <div className="welcome-card">
        {display === "TextCard" && <TextCard setDisplay={setDisplay} />}
        {display === "TimeSelector" && (
          <TimerSelectorCard setDisplay={setDisplay} />
        )}
      </div>
    </div>
  );
}

export default Home;
