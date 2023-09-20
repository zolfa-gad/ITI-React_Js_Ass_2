import "bootstrap/dist/css/bootstrap.min.css";
import ButtonItem from "../button-item/button-item";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function ToDoItem(props) {
  return (
    <div className="App d-flex justify-content-between  border border-2 w-100 p-1 px-3">
      <span>{props.id}</span>
      <span className={props.completed ? "text-decoration-line-through" : ""}>
        {props.content}
      </span>
      <div className="d-flex gap-3">
        <ButtonItem
          id={`${props.id}-done`}
          color="dark"
          text={props.completed ? "Un Done" : "Done"}
          onClick={props.doneToDo}
        ></ButtonItem>
        <ButtonItem
          id={`${props.id}-remove`}
          color="dark"
          text="Remove"
          onClick={props.removeToDo}
        ></ButtonItem>
      </div>
    </div>
  );
}

export default ToDoItem;
