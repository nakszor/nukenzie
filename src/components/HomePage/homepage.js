import "./homepage.css";
import "../Logo/logo.js";
import LogoNuKenzie from "../Logo/logo.js";
import Button2 from "../Button2/button2.js";
import Card from "../Card/card.js";
function HomePage() {
  return (
    <main className="home-page">
      <header className="hp-header">
        <div className="hp-container-header">
          <LogoNuKenzie />
          <Button2 text={"Inicio"} />
        </div>
      </header>
      <div className="hp-page">
        <div className="hp-page-container">
          <div className="form-total">
            <form>
              <p>Descrição</p>
              <input
                className="input-default"
                placeholder="Digite aqui sua descrição"
              ></input>
              <label className="text3">Ex: Compra de roupas</label>
              <div className="container-value">
                <div className="value">
                  <p>Valor</p>
                  <div className="div-value">
                    <input className="input-default value-input"></input>
                    <p>R$</p>
                  </div>
                </div>
                <div>
                  <p>Descrição</p>
                  <select className="input-default">
                    <option>Entrada</option>
                  </select>
                </div>
              </div>
              <Button2 text={"Inserir valor"} />
            </form>
            <div className="total-value">
              <div className="div-total1">
                <p>Valor total:</p>
                <p>O valor se refere ao saldo </p>
              </div>
              <div className="div-total2">
                <p>$salde</p>
              </div>
            </div>
          </div>
          <div className="filters">
            <div className="nav-filter">
              <p>Resumo Financeiro</p>
              <div className="list1">
                <div>
                  <Button2 text={"Todos"} />
                </div>
                <div>
                  <Button2 text={"Entradas"} />
                </div>
                <div>
                  <Button2 text={"Despesas"} />
                </div>
              </div>
            </div>
            <div className="filters2">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default HomePage;
