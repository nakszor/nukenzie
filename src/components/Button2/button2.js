import "./button2.css";
function Button2({ text, callback }) {
  return (
    <button className="btn" onClick={callback}>
      {text}
    </button>
  );
}
export default Button2;
