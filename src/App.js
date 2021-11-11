import { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>

      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Fragment>
  );
}

export default App;
