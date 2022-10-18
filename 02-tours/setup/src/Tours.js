import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, remTour }) => {
  return (
    <main>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour tour={tour} key={tour.id} remTour={remTour} />;
          // return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </main>
  );
};

export default Tours;
