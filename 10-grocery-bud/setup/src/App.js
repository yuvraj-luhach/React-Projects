import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  }
  return [];
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);

  const [isEdit, setIsEdit] = useState(false);

  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, "please enter value", "danger");
    } else if (name && isEdit) {
      // edit
      setList(
        list.map((item) => {
          if (editId === item.id) {
            item.title = name;
            // return {...item,title:name}
          }
          return item;
        })
      );
      setName("");
      setIsEdit(false);
      setEditId(null);
      showAlert(true, "item edited", "success");
    } else {
      // show alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "item added to the list", "success");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    setList([]);
    showAlert(true, "empty list", "danger");
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEdit(true);
    setEditId(id);
    setName(specificItem.title);
  };
  const deleteItem = (id) => {
    showAlert(true, "item deleted", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form action="" onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEdit ? "Edit" : "Submit"}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className="grocery-container">
          <List text={list} removeItem={deleteItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
