import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#1ff").all(10));
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(5);
      console.log(colors);
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const changeColor = () => {};

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            value={color}
            onChange={(event) => setColor(event.target.value)}
            placeholder="#1ff"
            // className={error && "error"}
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          // console.log(color);
          return <SingleColor key={index} {...color} index={index} />;
        })}
        <h4></h4>
      </section>
    </>
  );
}

export default App;
