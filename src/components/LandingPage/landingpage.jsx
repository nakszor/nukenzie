import LogoNuKenzie from "../Logo/logo";
import Rectangle from "../Rectangle/rectangle";
import "./style.css";
function LandingPage({ setLandingPage }) {
  return (
    <main className="page-container">
      <section className="section1">
        <LogoNuKenzie />
        <div className="text1">
          <h1>Centralize o controle das suas finanças</h1>
        </div>
        <p className="text2">de forma rápida e segura</p>
        <button
          onClick={() => {
            setLandingPage((previous) => !previous);
          }}
        >
          Iniciar
        </button>
      </section>
      <section className="section2 all-flex">
        <div className="elipse all-flex color-elipse-1">
          <div className="elipse all-flex color-elipse-2">
            <div className="elipse all-flex color-elipse-3">
              <div className="square1 all-flex">
                <div className="container-balls">
                  <div className="ball color2"></div>
                  <div className="ball color3"></div>
                  <div className="ball color1"></div>
                </div>
                <div className="container-rectangles">
                  <Rectangle />
                  <Rectangle />
                  <Rectangle />
                  <Rectangle />
                  <Rectangle />
                  <Rectangle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default LandingPage;
