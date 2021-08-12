import React from "react";
import { useRef } from "react";
export default function Edit({
  storedTodo,
  handleToggleToDo,
  deleteTodo,
  handleEdit,
  handleUpdate,
  id,
  name,
}) {
  const update_todo_name = useRef("");
  var handleUpdateClick = (event) => {
    if (event.key === "Enter") {
      const updatedTodo = update_todo_name.current.value;
      handleUpdate(id, updatedTodo);
    }
  };
  return (
    <div className="update-bar">
      <input
        type="text"
        className="update-text"
        placeholder={name}
        ref={update_todo_name}
        onKeyPress={handleUpdateClick}
      />
    </div>
  );
}
