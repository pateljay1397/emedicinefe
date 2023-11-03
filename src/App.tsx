import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/SignUp" Component={SignUp} caseSensitive />
          <Route path="/SignIn" Component={SignIn} caseSensitive />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
