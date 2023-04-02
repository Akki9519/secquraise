import React,{useState} from "react";

import { Data } from "./Data.js";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';

const Box3 = (props) => {
  const [filter,setfilter]=useState(false)
  // const [gender,setgender]=useState("male")

  const handlefilter=()=>{
    setfilter("true");
  }

  return (
    <>
      <div className="flex flex-col border-4 border-slate-400 mt-14 ml-20" style={{height:"600px"}}>
        <div className="grid grid-cols-2 mt-5 mb-5">
          <div className="ml-5 text-l font-bold">Event</div>
          <TuneIcon sx={{ float: "right", marginLeft: "60%" }} onClick={handlefilter} />
           </div>
        {
          filter && <div className="bg-blue-300 shadow-sm border-solid border-2 m-10 h-52" >
          <div className="bg-blue-800 h-8"><CloseIcon sx={{float:"right",margin:"5px",color:"white"}} onClick={()=>{setfilter(false)}}/></div>
          <div className="flex flex-row mt-5 ml-5 font-semibold">Gender : <input type="checkbox"  value="Male" className="ml-2"/> Male <input type="checkbox" value="female" className="ml-2"/> Female
          </div>
          <div className="flex flex-row mt-2 ml-5 font-semibold">Location : <input type="checkbox" value="Male"  className="ml-2"/> Bangalore <input type="checkbox" value="female"  className="ml-2"/> Chennai           </div>
          <div className="flex flex-row mt-2 ml-5 mb-2 font-semibold">Date : <input type="date"  className="ml-2"/> 
          </div>
          <Button variant="contained" value="Apply" onClick={()=>{setfilter(false)}} sx={{marginLeft:"25px"}}>Apply</Button>
          </div>
        }

        {
          !filter && <div className="grid grid-cols-1 m-2 overflow-y-auto" style={{height:"550px"}}>
          {Data.map((item,key) => {
            return (
              <div className="bg-[#7F7F7F] h-20  pl-5 mb-2 flex flex-col hover:bg-slate-400" onClick={()=>{props.func(item)}}>
              <div className="flex flex-row pt-3">
               <div className="pb-5 text-[white] "> {item.ID}:{item.Location}</div>
               <div className="pl-5  font-semibold text-[white]"> {item.Date}  </div>
               <div className="float-right font-semibold pl-5 text-[white] " > {item.Time}  </div>
               </div>
                <div className="text-[white]">Person Detected.</div>
                </div>
              
              
            );
          })}
        </div>
        }
      </div>
    </>
  );
};

export default Box3;
