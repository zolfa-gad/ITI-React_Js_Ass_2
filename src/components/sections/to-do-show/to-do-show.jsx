import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ToDoItem from "../../reuable/to-do-item/to-do-item";

// import { useEffect } from "react";

function ShowToDo(props) {
  return (
    <div className="Add container  p-5">
      <div className=" w-100 p-5 bg-light text-dark border border-2 border-primary d-flex flex-column justify-content-center align-items-center gap-3">
        <h2 className="fs-1 fw-bolder">Let's Get Some Work Done</h2>
        <span className="d-block fs-6">Show New To Do</span>
        {props.toDoList.map((item,index) => {
          console.log(item, "item");
          console.log(item.id);
          return (
            <ToDoItem
              content={item.content}
              id={item.id}
              completed={item.completed}
              key={`item-${index}`}
              removeToDo={props.removeToDo}
              doneToDo={props.doneToDo}
            />
          );
        })}

        {/* <ToDoItem></ToDoItem> */}

        {/* list of to dos */}
      </div>
    </div>
  );
}

export default ShowToDo;
