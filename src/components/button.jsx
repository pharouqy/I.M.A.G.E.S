import "@/styles/_button.scss";

function Button({ type, onClick, children }) {
  return (
    <button type={type} className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
