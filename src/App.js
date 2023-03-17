// import logo from './logo.svg';
//import './App.css'

import { useState } from 'react';
import Nav from './Components/Nav'; 
import Form from './Components/Form';
// import DLMode from './Components/DLMode';
import Alert from './Components/Alert';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";



function App() {
  

const[btn, setBtn]=useState('Enable Dark mode')
const[colour,setcolour]=useState("light");
const[alert, setAlert]= useState(null);
const theme = () => {
  if(colour === "light" || colour ==="danger" || colour ==="primary" || colour ==="sucess" || colour ==="secondary" )
  {
    setcolour("dark")
    document.body.style.backgroundColor="black";
    // document.body.style.color="";
    showAlert("succcess","dark mode");
    setBtn('Enable light mode')
    document.title='Enable dark mode'
    setInterval(()=>{
      document.title = 'Edtech Text Converter';
    },2000)
   
    setInterval(()=>{
      document.title = 'Install Text Converter';
    },1500)
  }
  else {
    setcolour("light")
    document.body.style.backgroundColor="white";
    // document.body.style.color="black";
    showAlert("succcess","light mode");
    setBtn('Enable dark mode')
    document.title='Enable light mode'
  }}

  
  const showAlert = (message,type)=>{
    setAlert( {
          msg:message,
          typ:type
    })
    setTimeout(()=>{
      setAlert(null)
  },3000);

  }

  const toggleMode0 = () =>{
      setcolour("danger")
      document.body.style.backgroundColor="red";
    }

  const toggleMode1 = () =>  
      {
        setcolour("primary")
        document.body.style.backgroundColor="blue";
      }

   const toggleMode2 = () => 
        {
          setcolour("success")
          document.body.style.backgroundColor="green";
        }
  const toggleMode3 = () => 
          {
            setcolour("secondary")
            document.body.style.backgroundColor="grey";
          }
  
  return (
        <>     
        <Router>
        <Nav title='Hello' btn={btn} toggleMode0={toggleMode0} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} theme={theme} colour={colour}/>
        <Alert alert ={alert} />
        <Routes>
        <Route path="/" element= {<Form  colour={colour} showAlert={showAlert} heading='Enter your Data' />}/>
        <Route path="/About" element={<About/>}/>
        </Routes>  
        </Router> 
        </>    
        
  );
}

export default App;
