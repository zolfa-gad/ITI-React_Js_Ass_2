function ButtonItem({ id, text, color, className, onClick }) {
  return (
    <div className="">
      <button
        id={id}
        onClick={onClick}
        className={`btn btn-${color} ${className}`}
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonItem;
