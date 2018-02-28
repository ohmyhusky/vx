import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { store, history } from "./configureStore";
import PostsView from "./PostsView";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Form />
            <PostsView />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
