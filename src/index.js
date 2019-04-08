import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
class App extends React.Component {
  state = {
    list: ["Logan", "Brandon", "John"]
  };
  //button listener
  buttonClick() {
    let newarray = this.state.list;
    newarray.push(this.state.word);
    this.setState({
      list: newarray
    });
  }
  input = e => {
    //passing in the event from the input box
    this.setState({
      word: e.target.value
    });
  };
  deleteThis(e, key) {
    //Key and event are passed in from clicked li
    console.log("Deleted" + " => Key: " + key);
    let newarray = this.state.list;
    if (confirm("Do you wish to delete user: " + newarray[key])) {
      newarray.splice(key, 1);
      this.setState({
        list: newarray
      });
      alert("User Removed");
    } else {
      alert("Action Canceled!");
    }
  }
  makeAdmin(e, key) {
    let newarray = this.state.list;
    if (confirm("Make this User an Admin?: " + newarray[key])) {
    } else {
      alert("Action Canceled");
    }
  }
  update() {
    console.log("Updated(): => " + this.state.list);
    //this appends li tags with array items
    let b = this.state.list.map((item, key) => (
      <li key={key}>
        {item}
        <button
          className="buttonStyle"
          key={key}
          onClick={e => {
            this.deleteThis(e, key);
          }}
        >
          X
        </button>
      </li>
    ));
    //remember to have e => {this.deleteThis(e,key)} when passing keys
    return b;
  }
  render() {
    console.log(this.state.list);
    return (
      <div className="App">
        <h1 className="title">List of Things</h1>
        <input onChange={this.input} />
        <button onClick={() => this.buttonClick()}>Add</button>
        <h5>{this.state.word}</h5>
        <h2>Users Added:</h2>
        <ul>{this.update()}</ul>
      </div>
    );
  }
}
class Master extends React.Component {
  render() {
    return <App />;
  }
}
ReactDOM.render(<Master />, document.getElementById("root"));
