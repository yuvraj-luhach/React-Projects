import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  // useState hook
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday's today</h3>
        <List people_list={people} />
        <button onClick={clearAll}>Clear all</button>
        {/* <button onClick={() => setPeople([])}>Clear all</button> */}
      </section>
    </main>
  );
}

export default App;
