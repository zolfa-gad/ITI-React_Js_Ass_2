import ButtonItem from "../button-item/button-item";

function ToDoItem({ item, doneToDo, removeToDo }) {
  return (
    <div className="App d-flex justify-content-between border border-2 w-100 p-1 px-3">
      <span>{item.id}</span>
      <span
        className={
          // item.completed && "text-decoration-line-through opacity-50"
          item.completed ? "text-decoration-line-through opacity-50" : ""
        }
      >
        {item.content}
      </span>
      <div className="d-flex gap-3">
        <ButtonItem
          id={`${item.id}-done`}
          color="dark"
          text={item.completed ? "Un Done" : "Done"}
          onClick={doneToDo}
        />

        <ButtonItem
          id={`${item.id}-remove`}
          color="dark"
          text="Remove"
          onClick={removeToDo}
        />
      </div>
    </div>
  );
}

export default ToDoItem;
