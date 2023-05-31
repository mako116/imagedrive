import React from "react";
import { AiFillDelete, AiFillEdit, IconName } from "react-icons/ai";
const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  return (
    <div className="todoitem">
      <h5>{todo?.title}</h5>
      <div className="buttons">
     
        <AiFillEdit
           onClick={() => editTodo(todo)}
           cursor="pointer"
        />
        <AiFillDelete
        cursor="pointer"
           onClick={() => deleteTodo(todo)}
        />
        
      </div>
    </div>
  );
};

export default TodoItem;
