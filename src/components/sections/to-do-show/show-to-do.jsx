import ToDoItem from "../../reuable/to-do-item/item-to-do";

function ShowToDo({ toDoList, removeToDo, doneToDo }) {
  return (
    <div className="Add container  p-5">
      <div className=" w-100 p-5 bg-light text-dark border border-2 border-primary d-flex flex-column justify-content-center align-items-center gap-3">
        <h2 className="fs-1 fw-bolder">Let's Get Some Work Done</h2>
        <span className="d-block fs-6">Show New To Do</span>
        {toDoList.map((item, index) => {
          return (
            <ToDoItem
              item={item}
              key={`item-${index}`}
              removeToDo={removeToDo}
              doneToDo={doneToDo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShowToDo;
