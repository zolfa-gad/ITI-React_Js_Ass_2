import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./components/sections/to-do-add/add-to-do";
import ShowToDo from "./components/sections/to-do-show/show-to-do";
import { useEffect, useState } from "react";

function App() {
  //------------------- Use States ----------------//
  let [idCount, incrementCount] = useState(2);
  let [taskInputValue, setTaskInput] = useState("");

  let [toDoList, pushItem] = useState([
    {
      id: "1",
      content: "Hello From The Other Side",
      completed: true,
    },
  ]);

  //------------------- Input Task Value----------------//
  function onInputTaskChange(event) {
    setTaskInput(event.target.value);
  }

  //------------------- Add Task ----------------//
  function addToDo(event) {
    event.preventDefault();
    // console.log(event.target.querySelector("input"), "input");
    // let toDoText = document.getElementById("to-do-input");
    // counter length of the list

    let item = {
      // id: `${toDoList.length + 1}`,
      id: `${idCount}`,
      content: taskInputValue,
      completed: false,
    };

    pushItem([...toDoList, item]);

    incrementCount(idCount + 1);
    event.target.querySelector("input").value = "";
    setTaskInput("");
    // document.getElementById("to-do-input").value = "";
  }

  //------------------- Remove Task ----------------//
  function removeToDo(event) {
    // console.log(event.target);
    let currentID = event.target.id.split("-")[0];
    console.log(currentID, "current");
    let newList = toDoList.filter(({ id }) => {
      console.log(id, "id");
      return id !== currentID;
    });
    console.log(newList, "remove");
    pushItem([...newList]);
    // console.log(toDoList, "after remove");
  }

  //------------------- Done Task ----------------//
  function doneToDo(event) {
    // console.log(event.target);
    let currentID = event.target.id.split("-")[0];
    // console.log(currentID);

    let foundItem = toDoList.find(({ id }) => id === currentID);
    foundItem.completed = !foundItem.completed;

    console.log(foundItem, "found");
    console.log(toDoList, "toDoFound");
    pushItem([...toDoList]);
  }

  //------------------- Use Effect ----------------//
  useEffect(() => {
    console.log("mounting");
    // console.log(toDoList);
    // console.log(idCount);
    // console.log(taskInputValue, "jdsfhdjshf");
  }, [toDoList, idCount, taskInputValue]);

  return (
    <div className="App">
      <header className="App-header">
        <AddToDo
          addToDoTask={addToDo}
          taskValue={taskInputValue}
          onChange={onInputTaskChange}
          // onSubmit={onInputTaskSubmit}
        />
        <ShowToDo
          toDoList={toDoList}
          removeToDo={(event) => removeToDo(event)}
          doneToDo={(event) => doneToDo(event)}
        />
      </header>
    </div>
  );
}

export default App;
