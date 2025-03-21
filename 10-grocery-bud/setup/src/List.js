import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ text, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {text.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                <FaEdit onClick={() => editItem(id)} />
              </button>
              <button type="button" className="delete-btn">
                <FaTrash onClick={() => removeItem(id)} />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
