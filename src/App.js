import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';


const App = (props) => {
  return (
      <Router>
          <div className='app-wrapper'>
              <Header />
              <Navbar NavbarProps={props.state.sidebar}/>
              <div className="app-wrapper-content">

                  <Routes>
                      <Route path='/news' element = {<News />} />
                      <Route path='/profile' element = {<Profile postsProp={props.state.profilePage}
                                                                 dispatch={props.dispatch}
                      />} />
                      <Route path='/dialogs/*' element = {<Dialogs store = {props.store} />} />
                      <Route path='/music' element = {<Music />} />
                      <Route path='/settings' element = {<Settings />} />
                  </Routes>
              </div>
          </div>
      </Router>
  );
}






export default App;
