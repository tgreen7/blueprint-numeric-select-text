import React, { Component } from "react";
import {
  NumericInput,
  Dialog,
  FocusStyleManager
} from "@blueprintjs/core";
import "./App.css";

FocusStyleManager.onlyShowFocusOnTabs();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dialog isOpen>
          <NumericInput />I am some text
        </Dialog>
      </div>
    );
  }
}

export default App;
