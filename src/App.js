import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "./logo.svg";
import "./App.css";
import { setButtonText } from "./actions/home";

class App extends Component {
  //whwnever this function triggers, action will be sent to staore
  changeInput(event) {
    const value = event.target.value;
    //add debbugger here and see event.target.value
    //here you are sending instructions to store from this action creator
    this.props.setButtonText(value);
  }
  render() {
    const buttonText = this.props.home.inputValue;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <br />
        <label>Text for button : </label>

        <input onChange={this.changeInput.bind(this)} />
        <br />
        <br />
        <button>{buttonText}</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //add debugger here. find the state value changes when input changes and page initially loades
  return {
    home: state.homeReducer
  };
}

//you are binding action generator to this scope
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setButtonText: setButtonText }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//mapStateToProps, mapDispatchToProps connect(mapStateToProps, mapDispatchToProps)(App) is redux syntax.. you just need to follow that
