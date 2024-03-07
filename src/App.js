import react,{ useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import Accordion from "./components/Accordion";
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Particle from "./Particle";

function App() {
  const [mode,setMode]= useState('light');//whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
   const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#494b4c';
      showAlert("dark enabled","danger");
    
    }
    else{
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("light enabled","success");
    
   }
  }
  return (
    <>
      <Particle />

    <Router>
    <Navbar title= "TextUtils"  mode={mode} toggleMode={toggleMode} abouttext="sdsds"/>
    <Alert alert={alert} />

    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <Accordion />
          <Route>
          <Route path="/"> 
          <Textform  showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode} />
          </Route>
    </Switch>  */}
    <Routes>
        <Route path="/" element={<Textform  showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode} />} />
        <Route path="/accordion" element={<Accordion />} />
         {/* <Route path="*" element={<NoMatch />} /> Catch-all route */}
    </Routes>
    {/* <Accordion/> */}
    </div>
    </Router>
    </>
  ); 
}

export default App;
