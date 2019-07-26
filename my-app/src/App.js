import React, { Component } from "react";
import "./App.css";

import NameComponent from "./components/NameComponent";

class App extends Component {
  componentDidMount() {
    console.log("mounted");
  }

  render() {
    var style = { fontSize: "20px" };

    const array = ["welcome", "to", "my", "course"];

    return (
      <div>
        <p style={style} className="text-large">
          Hi
        </p>

        {array.map(word => {
          return <p key={word}>{word}</p>;
        })}

        <NameComponent />
        <button onClick={() => console.log("clicked")}>
          <NameComponent />
        </button>
      </div>
    );
  }
}

export default App;
