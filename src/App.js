import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Movies from './components/movies';
import NotFound from './components/not-found';

class App extends Component {
  render() {
    return (
      <main className='container'>
        <div className='content'>
          <Switch>
            <Route path="/not-found" component={NotFound} />
            <Redirect from='/movies' to='/' />
            <Route path="/" exact component={Movies}/>
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
    );
  }  
}

export default App;
