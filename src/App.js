import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layouts/Navbar'
import Home from './Components/Pages/Home';
import User from './Components/Users/User';
import About from './Components/Pages/About';
import Alert from './Components/layouts/Alert';
import NotFound from './Components/Pages/NotFound';

import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';



const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title={'Github Finder'} />
            <div className="container">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="*" element={<NotFound />} />

              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}


export default App;
