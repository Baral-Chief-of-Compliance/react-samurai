import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';


const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
            <Routes>
                <Route path='/dialogs' element = {<Dialogs />} />
                <Route path='/profile' element = {<Profile />} />
            </Routes>
        </div>
      </div>

  );
}






export default App;
