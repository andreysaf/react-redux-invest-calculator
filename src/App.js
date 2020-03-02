import React from "react";
import { Counter } from "./features/counter/Counter";
import { Container } from "semantic-ui-react";
import Invest from "./features/investCalc/Invest";
import "./App.css";

function App() {
  return (
    <div className="AppContainer">
        <Container>
          <Invest />
        </Container>
    </div>
  );
}

export default App;
