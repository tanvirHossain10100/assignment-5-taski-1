/* eslint-disable no-const-assign */
import { useState } from "react";
import TodoItem from "../../components/TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const [updateTodo, setUpdateTodo] = useState("");
  const [resetINput, setResetINput] = useState(null);
  const [clearValue, setClearValue] = useState("");
  const todoList = [
    {
      id: 1,
      task: "Buy Ice Cream",
      completed: false,
    },
    {
      id: 2,
      task: "Playing Cricket",
      completed: false,
    },
    {
      id: 3,
      task: "Eat Rice",
      completed: true,
    },
    {
      id: 4,
      task: "Ride The Cycle",
      completed: false,
    },
  ];
  const [todo, setTodo] = useState(todoList);
  const AddTotTodo = (e) => {
    e.preventDefault();
    const newTodo = e.target.inputTodo;
    if (!newTodo.value) {
      alert("Please add your todo");
      return;
    }

    const newTodoValue = {
      id: todo.length + 1,
      task: newTodo.value,
      completed: false,
    };
    newTodo.value = "";
    setTodo([...todo, newTodoValue]);
  };
  const completedBtn = (id) => {
    const updateStatus = todo.reduce((acc, current) => {
      if (current.id === id) {
        current.completed = !current.completed;
      }
      acc.push(current);
      return acc;
    }, []);
    setTodo([...updateStatus]);
  };
  const delBtn = (id) => {
    const rest = todo.filter((item) => item.id !== id);
    setTodo(rest);
  };
  const updateTodoStatus = (id) => {
    console.log("d", id);
    const rest = todo.filter((item) => item.id !== id);
    const updateTodoStatus = todo.reduce((acc, current) => {
      if (id === current.id) {
        if (updateTodo !== "" || null) {
          current.task = updateTodo;
          setUpdateTodo("");
          // setClearValue("");
        } else {
          alert("Please add your todo");
        }
        console.log(resetINput, "df");
      }
      acc.push(current);
      return acc;
    }, []);
    setTodo(updateTodoStatus);
    console.log(updateTodoStatus);
    console.log(id);
    console.log(updateTodo, "l");
  };

  return (
    <>
      <div className="TodoListPage">
        <div className="header">
          <h1>To Do List</h1>
        </div>
        <div className="newTodo">
          <form onSubmit={AddTotTodo}>
            <input name="inputTodo" type="text" className="input" />
            <button type="submit" id="addTodoBtn">
              Add to todo
            </button>
            <p></p>
          </form>
        </div>
        <div className="todoList">
          {todo.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              completedBtn={completedBtn}
              delBtn={delBtn}
              updateTodoStatus={ updateTodoStatus}
              setChildSTate={setUpdateTodo}
              currentUpdateTodo={updateTodo}
              resetValueOfInput={resetINput}
              setReset={setResetINput}
              u={[todo, setTodo]}
            ></TodoItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
