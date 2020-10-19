import React from "react";
import Ninjas from "./Ninjas.js";
import AddNinja from "./AddNinja";
class App extends React.Component {
  state = {
    ninjas: [
      { name: "Hattori", age: "14", expr: "Ding Ding", id: "1" },
      { name: "Amaara", age: "14", expr: "YaiYayi Yayi", id: "2" },
      { name: "Sinzhou", age: "12", expr: "Bale bhai", id: "3" },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas];
    ninjas.push(ninja);
    this.setState({
      ninjas: ninjas,
    });
  };

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    console.log(id);
    this.setState({
      ninjas: ninjas,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>My React App Welcome :)</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}
export default App;
