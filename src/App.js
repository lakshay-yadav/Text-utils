import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert = (message,type)=>{
    setAlert({
      message : message,
      type : type
    })
  }

  const toggleMode = ()=>{
    // console.log('yes');
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlert("Light mode has been enabled","success");
    }
    // console.log(mode);
  }
  return (
    <>
    <Navbar title = "TextUtils" about = "About" mode = {mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm heading = "Enter your text" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;