import "./card.css";
import { FaTrash } from "react-icons/fa";

function Card({ description, value, type, callbackDelete, position }) {
  return (
    <li className="card animate__animated animate__lightSpeedInLeft">
      <div className="card-div1">
        <p>{description}</p>
        <p>{type}</p>
      </div>
      <div className="card-div2">
        <p>
          {Number(value).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button
          className="cursor btn-trash"
          onClick={() => callbackDelete(position)}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
}
export default Card;
