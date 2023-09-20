import "./App.css";
import AddToDo from "./components/sections/to-do-add/to-do-add";

import "bootstrap/dist/css/bootstrap.min.css";
import ShowToDo from "./components/sections/to-do-show/to-do-show";
// import { useState } from "react";
import { useEffect, useState } from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  // let idCount = 2;
  // let toDoList = [
  //   {
  //     id: "1",
  //     content: "Hello From The Other Side",
  //     completed: false,
  //   },
  // ];

  let [toDoList, pushItem] = useState([
    {
      id: "1",
      content: "Hello From The Other Side",
      completed: true,
    },
  ]);
  let [idCount, incrementCount] = useState(2);
  // let [completed, updateTask] = useState(false);

  function addToDo() {
    let toDoText = document.getElementById("to-do-input");
    // console.log(toDoList, "list");

    // let item = {
    //   id: `${idCount}`,
    //   content: toDoText.value,
    //   completed: false,
    // };

    let item = {
      id: `${idCount}`,
      content: toDoText.value,
      completed: false,
    };
    console.log(item);

    pushItem([...toDoList, item]);

    incrementCount(idCount + 1);
    toDoText.value = "";
    // idCount++;
    // console.log(toDoList, "list");
  }

  function removeToDo(event) {
    console.log(event.target);
    let currentID = event.target.id.split("-")[0];
    console.log(currentID);
    let newList = toDoList.filter(({ id }) => id !== currentID);
    console.log(newList);
    pushItem([...newList]);
    console.log(toDoList, "after remove");
  }

  function doneToDo(event) {
    console.log(event.target);
    let currentID = event.target.id.split("-")[0];
    console.log(currentID);

    let found = toDoList.map((item) => {
      if (item.id === currentID) {
        item.completed = !item.completed;
        console.log("found");
      }
      return item;
      // return toDoList;
    });

    console.log(found, "found");
    // console.log([...found]);
    pushItem([...found]);
  }

  useEffect(() => {
    console.log("mounting");
    console.log(toDoList);
    console.log(idCount);
  }, [toDoList, idCount]);

  // toDoList
  // .push({
  //   id: `${idCount}`,
  //   content: toDoText.value,
  //   completed: false,
  // });

  // let x = toDoList.push(item);
  // toDoList.push(item);
  // pushItem(x);
  // pushItem(toDoList);
  // console.log(toDoList);

  // let toDoText = document.getElementById("to-do-input").value;
  // toDoList.push({
  //   id: idCount,
  //   content: toDoText,
  //   completed: false,
  // });
  // idCount++;
  // console.log(toDoList);
  // setCounter(idCount + 1);

  // let [toDoList, pushItem] = useState({
  //   id: "1",
  //   content: "Hello From The Other Side",
  //   completed: false,
  // }); // function setCounter(){}

  // let [toDoList, pushItem] = useState([
  //   {
  //     id: 1,
  //     content: "Hello From The Other Side",
  //     completed: false,
  //   },
  // ]);

  // function pushItem(item) {
  //   toDoList.push(item);
  // }
  // let [name, setName] = useState("");

  // useEffect(() => {
  //   console.log("mounting");
  // }, [toDoList]);

  // useEffect(() => {
  //   // /on detsroy function only
  //   return () => {
  //     console.log("destroy");
  //   };
  // });

  // useEffect(() => {
  //   console.log(idCount,'hh')
  //   // if (idCount !== 0) {
  //   //   console.log("counter changed");
  //   // }
  //   // counter++
  //   // setCounter(idCount+1)
  // }, [idCount]);
  //mounting => dependencies array empty
  //update => dependcies array with state or more

  // useEffect(() => {
  //   if (name !== "") {
  //     console.log("name changed");
  //   }
  // }, [name]);

  // const updateName = () => {
  //   setName("test");
  // };

  // const handleClick = () => {
  //   // console.log('bbbbbb')
  //   // counter = counter + 1;
  // };

  return (
    <div className="App">
      <header className="App-header">
        <AddToDo addFun={addToDo} list={toDoList} />
        {console.log(toDoList)}
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
