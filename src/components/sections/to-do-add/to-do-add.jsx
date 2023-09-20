import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ButtonItem from "../../reuable/button-item/button-item";

// import { useEffect } from "react";

function AddToDo(props) {
  // function addToDo() {
  //   console.log(document.getElementById("to-do-input"));
  //   console.log("Hello");
  // }

  // useEffect(() => {
  //   const element = document.getElementById("to-do-input");
  //   console.log(element);
  //   // console.log(element.id);
  // }, []);

  return (
    <div className="Add container  p-5">
      <div className=" w-100 p-5 bg-primary border border-2 border-light d-flex flex-column justify-content-center align-items-end gap-3">
        <h2 className="fs-1 fw-bolder">To Do App</h2>
        <span className="d-block fs-6">Add New To Do</span>
        <input
          id="to-do-input"
          className="form-control form-control-lg w-100 rounded-2"
          placeholder="Enter New To Do"
        />
        <ButtonItem
          onClick={props.addFun}
          text="Add Task"
          color="outline-light"
          className=" p-3"
        />
        {/* <button className="btn btn-outline-light p-3" onClick={props.addFun}>
          Add Task
        </button> */}
      </div>
    </div>
  );
}

export default AddToDo;
