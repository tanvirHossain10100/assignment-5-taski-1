import "./TodoItem.css";
import { useState } from "react";

const TodoItem = ({
  item: { id, completed, task },
  completedBtn,
  delBtn,
  updateTodoStatus,
  setChildSTate,
  resetValueOfInput,
  setReset,
}) => {
  const [upDateInputToggle, setUpdateINputToggle] = useState(false);
  const upDateInput = () => {
    setUpdateINputToggle(true);
  };
  // const enterBtnevent = (e) => {
  //   if (e.key === "Enter") {
  //     setChildSTate("dfds");
  //     if (e.target.value === "") {
  //       return alert("Please insert you todo");
  //     }
  //     console.log(e.target.value);
  //   }
  // };
  const onchange = (e) => {
    const todo = e.target.value;
    console.log(todo);
    setChildSTate(todo);
    console.log(resetValueOfInput);
    if (resetValueOfInput) {
      e.target.value = "";

      setReset(false);
    }
  };
  return (
    <>
      <div className="todoItem">
        <ul className="todoItemUl">
          <li>{id}:</li>
          <li className="todoTask">
            {completed ? (
              <del>
                <span> {task}</span>
              </del>
            ) : (
              task
            )}
          </li>
          <li onClick={() => completedBtn(id)}>
            <button className={completed ? "notClicked" : "click"}>
              &#10003;
            </button>
          </li>
          <li onClick={() => delBtn(id)}>
            <button>&#10060;</button>
          </li>

          {upDateInputToggle ? (
            <>
              <input
                type="text"
                id="update"
                onChange={onchange}
                placeholder="Write to update your todo"
              />
              <span onClick={() => setUpdateINputToggle(false)}>
                <button
                  className="updateBtn"
                  onClick={() => updateTodoStatus(id)}
                >
                  update
                </button>
              </span>
            </>
          ) : (
            <li onClick={upDateInput}>&#9874;</li>
          )}
        </ul>
      </div>
    </>
  );
};
export default TodoItem;
