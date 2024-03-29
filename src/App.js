import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import ProjectPage from './projects/ProjectPage';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />

        <Route path="/projects/:id" component={ProjectPage} />
      </Router>
    );
  }
}

export default App;
