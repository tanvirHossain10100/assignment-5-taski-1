import { useState } from "react";
import "./App.css";
import TodoList from "../TodoList/TodoList";

function App() {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <>
      <div>
        <TodoList />
      </div>
    </>
  );
}

export default App;
