import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
import Authenticate from './component/Authenticate';
import { useState } from 'react';

function App() {
  //var isAuthed = false;
return (
  <div className="App">
    <Authenticate/>    
  </div>
);
}

export default App;
