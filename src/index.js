import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Liste de clients</h1>
        <ul>
          <li>
            Eddie Vedder <button>x</button>
          </li>
          <li>
            Chris Cornell <button>x</button>
          </li>
          <li>
            Mike Patton <button>x</button>
          </li>
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un client" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
