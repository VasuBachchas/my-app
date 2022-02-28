
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState({
    buttonColor: "primary"
  })
  const colorDeterminer = (id) => {
    if (id === "primary") {
      setColor({
        buttonColor: "primary"
      })
    }
    if (id === "secondary") {
      setColor({
        buttonColor: "secondary"
      })
    }
    if (id === "success") {
      setColor({
        buttonColor: "success"
      })
    }
    if (id === "danger") {
      setColor({
        buttonColor: "danger"
      })
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';

      showAlert('Dark Mode Enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light Mode Enabled', 'success');
    }
  }
  return (
    <>
    <Router>

      <Navbar title="TextUtils" colorD={colorDeterminer} aboutText="AboutTextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
      <Routes>
        {/*
          /user--> component 1
          /user/home-->component 2
        */ }
          <Route exact path="/about" element={ <About />}/>

          
          <Route exact path="/" element={<TextForm showAlert={showAlert} col={color} heading="Enter the text to analyze" mode={mode} />}/>
          
        
        </Routes>
        
      </div>
      {/*<About/>*/}
    </Router>
    </>
  );
}

export default App;
