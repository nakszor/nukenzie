import "./card.css";
import { FaTrash } from "react-icons/fa";
function Card() {
  return (
    <div className="card">
      <div className="card-div1">
        <p>Sálario</p>
        <p>Entrada</p>
      </div>
      <div className="card-div2">
        <p>R$326595</p>
        <div>
          <FaTrash />
        </div>
      </div>
    </div>
  );
}
export default Card;
