import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import MovieForm from "./components/movieForm";
import Rentals from "./components/rentals";
import Movies from "./components/movies";
import NotFound from "./components/not-found";
import NavBar from "./components/navBar";
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movie/:id" component={MovieForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/movies" component={Movies} />
            <Route path="/" exact component={Movies} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
