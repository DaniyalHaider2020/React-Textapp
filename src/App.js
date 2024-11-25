// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom"


function App() {
  const [mode, setmode]= useState('light')
  const [alert, setalert]= useState(null)

  const showalert =(message, type)=>{
    setalert ({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if (mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='black'
      showalert ("Dark mode has been enabled", "success")
     // document.title ='TextUtils-Dark Mode';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert ("Light mode has been enabled", "success");
      //document.title ='TextUtils-Light Mode';
    }
  }
  return (
    <>
    {/* <Router>  */}
    <Navbar title="TextUtils" Mode={mode} toggleMode= {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
    <TextForm showalert={showalert} heading="Enter text here to analyze" Mode={mode} />
      {/* <Routes> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/" element={<TextForm showalert={showalert} heading="Enter text here to analyze" Mode={mode} />} /> */}
      {/* </Routes> */}
    </div>
    
    {/* </Router> */}
    </>
  );
}
export default App;
