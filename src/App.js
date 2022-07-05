import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CharactersProjectProvider } from "./components/context/CharactersProjectContext";
import CreateCharacter from "./pages/CreateCharacter";
import Home from "./pages/Home";

function App() {
  return (
    <CharactersProjectProvider>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-character" component={CreateCharacter} />
          </Switch>
        </Router>
      </div>
    </CharactersProjectProvider>
  );
}

export default App;
