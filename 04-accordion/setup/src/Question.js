import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggle = () => {
    setShowInfo((showInfo) => {
      return !showInfo;
    });
  };

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggle}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </div>
  );
};

export default Question;
