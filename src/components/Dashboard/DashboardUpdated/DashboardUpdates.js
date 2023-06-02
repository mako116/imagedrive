import { useState } from "react";
 import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
 
const DashboardUpdates = () => {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");
  const [submitType, setSubmitType] = useState(null);

   const handleFormSubmission = () => {
    // console.log(input);

    if (submitType?.title) {
      let currentTodo = todos.filter((item) => item.id !== submitType.id);

      let newItem = {
        userId: submitType?.userId,
        id: submitType?.id,
        title: input,
        completed: submitType?.completed,
      };

      let newTodos = [...currentTodo, newItem];

      setTodos(newTodos);
       setSubmitType(null);
      setInput("");

     
    } else {
      setTodos((prevState) => [
        ...prevState,
        {
          userId: 1,
          id: todos.length + 1,
          title: input,
          completed: false,
        },
      ]);

     }

    setInput("");
  };

  const deleteTodo = (todo) => {
    let currentTodo = todos.filter((item) => item.id !== todo.id);

    setTodos(currentTodo);
   };
  const editTodo = (todo) => {
    setSubmitType(todo);

    setInput(todo?.title);
    console.log(todo);
  };

  
 

 
  return (
    <>
      <div className="content">
        <div className="container">
          <AddTodo
            input={input}
            setInput={setInput}
            handleFormSubmission={handleFormSubmission}
            submitType={submitType}
          />
          <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
      </div>
     
      </>
   );
};

 export default DashboardUpdates