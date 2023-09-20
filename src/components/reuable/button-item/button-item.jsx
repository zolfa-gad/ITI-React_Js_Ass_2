import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function ButtonItem(props) {
  return (
    <div className="">
      <button
      id={props.id}
        onClick={props.onClick}
        className={`btn btn-${props.color} ${props.className}`}
      >
        {props.text}
      </button>
    </div>
  );
}

export default ButtonItem;
