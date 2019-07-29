import React, { Component } from "react";
import "./App.css";

import NameComponent from "./components/NameComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: 'Fernanda',
      profession : 'Programmer'
    };
  }

  componentDidMount() {
    console.log("mounted");
  }

  handleClick(){
    this.setState({
      user_name : 'Fernanda Aparecida'
    });
  }

  componentDidUpdate(){
    console.log('update');
  }

  render() {

    const style = { fontSize: "20px" };

    return (
      <div className="header">
        <p style={style}>
          {this.state.user_name} - {this.state.profession}
        </p>
        <NameComponent user_name={this.state.user_name}/>
        <button onClick={this.handleClick.bind(this)}>
          <NameComponent />
        </button>
      </div>
    );
  }
}

export default App;
