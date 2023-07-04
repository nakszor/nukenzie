import "./App.css";
import "./components/Colors/colors.css";
import HomePage from "./components/HomePage/homepage.js";
import LandingPage from "./components/LandingPage/landingpage.js";
function App() {
  return (
    <div className="App">{isLandingpage ? <LandingPage /> : <HomePage />}</div>
  );
}

export default App;
