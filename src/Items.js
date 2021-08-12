import React from "react";
import Edit from "./Edit";
const { v4: uuidv4 } = require("uuid");
export default function Items({
  storedTodo,
  handleToggleToDo,
  deleteTodo,
  handleEdit,
  handleUpdate,
}) {
  if (storedTodo.length === 0)
    return (
      <div key={uuidv4()} className="a-to-do">
        <h1>ToDo List is Enmpty !</h1>
      </div>
    );
  var handleonChange = (id) => {
    handleToggleToDo(id);
  };
  var handleEditClick = (id) => {
    handleEdit(id);
  };
  var handleDeleteClick = (id) => {
    deleteTodo(id);
  };
  return storedTodo.map((element) => {
    if (element.edit === true) {
      //console.log(element.name);
      return (
        <Edit
          key={uuidv4()}
          storedTodo={storedTodo}
          handleToggleToDo={handleToggleToDo}
          deleteTodo={deleteTodo}
          handleEdit={handleEdit}
          handleUpdate={handleUpdate}
          id={element.id}
          name={element.name}
        />
      );
    }
    return (
      <div key={uuidv4()} className="a-to-do">
        <input
          type="checkbox"
          className="check"
          checked={element.complete}
          onChange={() => handleonChange(element.id)}
        />
        <h1>{element.name}</h1>
        <div className="buttons-bar">
          <button id="buttons" onClick={() => handleDeleteClick(element.id)}>
            delete
          </button>
          <button id="buttons" onClick={() => handleEditClick(element.id)}>
            Edit
          </button>
        </div>
      </div>
    );
  });
}
