import React, { useState } from "react";

const Tour = ({ tour, remTour }) => {
  const { id, name, info, image, price } = tour;

  const [showAll, setShowAll] = useState(false);
  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);
  const toShow = info.substring(0, 200) + "...";

  return (
    <article className="single-tour">
      <img src={image} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        {/* We show the extended text and a link to reduce it */}
        {showAll ? (
          <p>
            {info}
            <button onClick={showLess}>Show less</button>
          </p>
        ) : (
          <p>
            {toShow}
            <button onClick={showMore}>Read more</button>
          </p>
        )}
        <button className="delete-btn" onClick={() => remTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
