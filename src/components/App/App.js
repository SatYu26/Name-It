import React, { Component } from "react";
import "./App.css";
import Header from "../header/header";
import SearchBox from "../SearchBox/searchbox";

class App extends Component {
  state = {
    headerText: "Name It!",
    headerExpanded: true,
  };

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: inputText.length > 0 ? false : true,
      // headerExpanded: !inputText,
    });
  };

  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
