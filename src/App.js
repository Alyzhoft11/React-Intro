import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adobt Me!</h1>
        <Pet name="Jessie" animal="dog" breed="Yellow Lab" />
        <Pet name="Dixie" animal="dog" breed="Labradoddle" />
        <Pet name="Woody" animal="dog" breed="Chocolate Lab" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
