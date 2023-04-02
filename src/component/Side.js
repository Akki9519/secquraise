import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
const Side = () => {
  return (
    <>
    <div className="flex flex-col   w-10 border border-[gray] bg-[#00B8F1]">
        <div className="pl-1 pt-3 "><MenuIcon sx={{color:"white"}}/></div>
        <div className="pl-.5 pb-3 pt-20" style={{marginTop:"550px"}} ><DoubleArrowIcon sx={{color:"White"}}/></div>
        </div>
    </>
  )
}

export default Side