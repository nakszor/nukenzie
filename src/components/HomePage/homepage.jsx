import LogoNuKenzie from "../Logo/logo";
import Button2 from "../Button2/button2";
import "./style.css";
import { useState } from "react";
import Card from "../Card/card";
export default function HomePage({ setLandingPage }) {
  const [transac, setTransac] = useState({});
  const [cards, setCards] = useState([]);
  const [filtering, setfiltering] = useState("todos");
  const total = cards.reduce((acc, current) => {
    return current.type === "Entrada"
      ? acc + parseFloat(current.value.replace(",", ".").replace(" ", ""))
      : acc - parseFloat(current.value.replace(",", ".").replace(" ", ""));
  }, 0);
  function callbackDelete(position) {
    const filtrados = cards.filter((elem, index) => index !== position);
    setCards(filtrados);
  }
  function handleSubmit(event) {
    setCards((previous) => [...previous, transac]);
  }

  function callback(elem, index) {
    if (elem.type === filtering) {
      return (
        <Card
          key={index}
          description={elem.description}
          value={elem.value}
          type={elem.type}
          position={index}
        />
      );
    }

    if (filtering === "todos") {
      return (
        <Card
          key={index}
          description={elem.description}
          value={elem.value}
          type={elem.type}
          callbackDelete={callbackDelete}
          position={index}
        />
      );
    }
  }
  return (
    <main className="home-page">
      <header className="hp-header">
        <div className="hp-container-header">
          <LogoNuKenzie />
          <button
            className="btn-iniciar"
            onClick={() => {
              setLandingPage((previous) => !previous);
            }}
          >
            Inicio
          </button>
        </div>
      </header>
      <div className="hp-page">
        <div className="hp-page-container">
          <div className="form-total ">
            <form onSubmit={(e) => e.preventDefault()}>
              <p>Descrição</p>

              <input
                type="text"
                className="input-default focus"
                placeholder="Digite aqui sua descrição"
                onChange={(event) =>
                  setTransac({ ...transac, description: event.target.value })
                }
                required
              ></input>
              <label className="text3 ">Ex: Compra de roupas</label>
              <div className="container-value">
                <div className="value">
                  <p>Valor</p>
                  <div className="div-value focus">
                    <input
                      type="number"
                      className="input-default value-input"
                      onChange={(event) =>
                        setTransac({ ...transac, value: event.target.value })
                      }
                      required
                    ></input>
                    <p>R$</p>
                  </div>
                </div>
                <div>
                  <p>Descrição</p>
                  <select
                    required
                    className="input-default focus"
                    onChange={(event) =>
                      setTransac({ ...transac, type: event.target.value })
                    }
                  >
                    <option defaultValue>Selecionar</option>
                    <option value={"Entrada"}>Entrada</option>
                    <option value={"Despesa"}>Despesa</option>
                  </select>
                </div>
              </div>
              <Button2 text={"Inserir valor"} callback={handleSubmit} />
            </form>
            <div className="total-value">
              <div className="div-total1">
                <p>Valor total:</p>
                <p>O valor se refere ao saldo </p>
              </div>
              <div className="div-total2">
                <p>
                  {total.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="filters ">
            <div className="nav-filter">
              <p>Resumo Financeiro</p>
              <div className="list1 ">
                <button
                  onClick={() => {
                    setfiltering("todos");
                  }}
                >
                  Todos
                </button>
                <button type="button" onClick={() => setfiltering("Entrada")}>
                  Entradas
                </button>
                <button type="button" onClick={() => setfiltering("Despesa")}>
                  Despesas
                </button>
              </div>
            </div>
            <ul className="filters2 ">
              {cards.map((elem, index) => callback(elem, index))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
