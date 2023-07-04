import "./components/reset/reset.css";
import "./App.css";
import "./components/Colors/colors.css";
import { useState } from "react";

import LandingPage from "./components/LandingPage/landingpage";
import HomePage from "./components/HomePage/homepage";

function App() {
  const [isLandingPage, setLandingPage] = useState(true);
  const [transactions, setTransactions] = useState([]);
  return (
    <div className="App">
      {isLandingPage ? (
        <LandingPage setLandingPage={setLandingPage} />
      ) : (
        <HomePage
          setLandingPage={setLandingPage}
          transactions={transactions}
          setTransactions={setTransactions}
        />
      )}
    </div>
  );
}

export default App;
