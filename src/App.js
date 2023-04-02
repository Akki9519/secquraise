import React,{useState} from "react";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Side from './component/Side';
import Box1 from './component/Box1';
import Box2 from './component/Box2';
import Box3 from './component/Box3';
import './App.css';
const App = () => {
  const [id,setid]=useState({
    "ID": "EVT0041",
    "Location": "Hyderabad",
    "Gender": "Female",
    "Name": "Female19",
    "Date": "9-Jan-23",
    "Time": "08:16:37"
   });
  return ( 
    <>
      <div className="m-10 border-solid border-2">
      <Header/>
      <Navbar/>
      <div className="flex flex-row">
      <Side/>
      <div className="grid grid-cols-3 max-md:grid-cols-1">
      <Box1 func={setid} id={id}/>
      <Box2 func={setid} id={id}/>
      <Box3 func={setid} id={id}/>
      </div>
      </div>
      </div>
    </>
  );
};

export default App;
 