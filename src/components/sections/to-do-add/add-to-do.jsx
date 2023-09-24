import ButtonItem from "../../reuable/button-item/button-item";

function AddToDo({ addToDoTask, taskValue, onChange }) {
  return (
    <div className="Add container  p-5">
      <div className=" w-100 p-5 bg-primary border border-2 border-light d-flex flex-column justify-content-center align-items-end gap-3">
        <h2 className="fs-1 fw-bolder">To Do App</h2>
        <span className="d-block fs-6">Add New To Do</span>
        <form
          onSubmit={addToDoTask}
          className="w-100 d-flex flex-column justify-content-centr align-items-end gap-4"
        >
          <input
            id="to-do-input"
            className="form-control form-control-lg w-100 rounded-2"
            placeholder="Enter New To Do Task"
            onChange={onChange}
            defaultValue={taskValue}
            // value={taskValue}
          />

          <ButtonItem
            // onClick={addToDoTask}
            text="Add Task"
            color="outline-light"
            className=" p-3"
          />
        </form>
      </div>
    </div>
  );
}

export default AddToDo;
