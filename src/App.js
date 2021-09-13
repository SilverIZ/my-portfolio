import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Interests from './pages/Interests';
import Awards from './pages/Awards';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,  faFacebook, faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle, faAward, faUniversity} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckCircle, faAward, faFacebook, faLinkedin, faGithub, faUniversity)



class App extends Component {
  render(){
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <About/>
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/interests">
          <Interests />
        </Route>
        <Route path="/awards">
          <Awards />
        </Route>
      </div>
    </Router>
    );
  }
  }
  
  export default App;
  