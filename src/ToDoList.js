import React from "react";
import { useRef, useEffect, useState } from "react";
import Items from "./Items";
const { v4: uuidv4 } = require("uuid");
export default function ToDoList() {
  const enteredText = useRef("");
  const [storedTodo, setStoredTodo] = useState(() => {
    const storedList = JSON.parse(localStorage.getItem("todo"));
    if (storedList) return storedList;
    return [];
  });

  var handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo();
      enteredText.current.value = "";
    }
  };

  var handleToggleToDo = (id) => {
    //console.log(id);
    const newStoredTodo = [...storedTodo];
    for (let i = 0; i < newStoredTodo.length; i++) {
      if (newStoredTodo[i].id === id) {
        newStoredTodo[i].complete = !newStoredTodo[i].complete;
        break;
      }
    }
    setStoredTodo(newStoredTodo);
  };

  var addTodo = () => {
    const name = enteredText.current.value;
    if (name === "") return;
    setStoredTodo((prev) => {
      return [
        ...prev,
        { id: uuidv4(), name: name, complete: false, edit: false },
      ];
    });
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(storedTodo));
    //console.log(storedTodo);
  }, [storedTodo]);

  var deleteTodo = (id) => {
    //console.log("inside delete");
    const newStoredTodo = storedTodo.filter((element) => {
      if (element.id !== id) return element;
    });
    setStoredTodo(newStoredTodo);
  };

  var handleEdit = (id) => {
    //console.log("inside Edit");
    const newStoredTodo = [...storedTodo];
    for (let i = 0; i < newStoredTodo.length; i++) {
      if (newStoredTodo[i].id === id) {
        newStoredTodo[i].edit = !newStoredTodo[i].edit;
        break;
      }
    }
    setStoredTodo(newStoredTodo);
  };

  var handleUpdate = (id, updatedTodo) => {
    const newStoredTodo = [...storedTodo];
    console.log(`id=${id} updatedTodo=${updatedTodo}`);
    for (let i = 0; i < newStoredTodo.length; i++) {
      if (newStoredTodo[i].id === id) {
        newStoredTodo[i].name = updatedTodo;
        newStoredTodo[i].edit = false;
        break;
      }
    }
    setStoredTodo(newStoredTodo);
  };

  console.log(storedTodo);
  return (
    <div>
      <div className="to-do-list">
        <h1>Please Enter ToDo here</h1>
        <input
          type="text"
          placeholder="   Please Enter"
          className="input-to-do"
          ref={enteredText}
          onKeyPress={handleKeyPress}
        ></input>
      </div>
      <div className="items-added">
        <Items
          storedTodo={storedTodo}
          handleToggleToDo={handleToggleToDo}
          deleteTodo={deleteTodo}
          handleEdit={handleEdit}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
}
