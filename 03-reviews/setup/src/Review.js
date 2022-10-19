import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const random = () => {
    let ind = Math.floor(Math.random() * people.length);
    if (ind === index) {
      ind = index + 1;
    }
    setIndex(checkInd(ind));
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkInd(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkInd(newIndex);
    });
  };

  const checkInd = (index) => {
    if (index < 0) {
      return people.length - 1;
    }
    if (index === people.length) {
      return 0;
    }
    return index;
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={people[index].image} alt="" className="person-img" />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <h4 className="author">{people[index].name}</h4>
      <p className="job">{people[index].job}</p>
      <p className="info">{people[index].text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={random}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
