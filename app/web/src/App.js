import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import Signup from './components/Signup';
import Project from './components/Project';
import CreateProject from './components/CreateProject';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/project/:id" component={Project} />
        <Route path="/projects/submit" component={CreateProject} />
      </Switch>

    </Router>
  );
}

export default App;
