import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <article>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className="filter-btn"
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </article>
  );
};

export default Categories;
