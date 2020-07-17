import React from 'react';
import { Switch, Route } from 'react-router'
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import AboutMe from './AboutMe.js'
import Interests from './Interests.js'
import Projects from './Projects.js'
import WorkHistory from './WorkHistory.js'
import ContactMe from './ContactMe.js'
import Footer from './Footer.js'
import ErrorPage from './ErrorPage.js'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about-me' component={AboutMe}/>
        <Route path='/interests' component={Interests}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/work-history' component={WorkHistory}/>
        <Route path='/contact-me' component={ContactMe}/>
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
