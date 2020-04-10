import React from "react";
import { Container } from "semantic-ui-react";
import Invest from "./features/investCalc/Invest";
import Mortgage from "./features/mortgageCalc/Mortgage";
import "./App.css";

function App() {
  return (
    <div className="AppContainer">
        <Container className="CalcContainer">
          <Invest />
          <Mortgage />
        </Container>
    </div>
  );
}

export default App;
