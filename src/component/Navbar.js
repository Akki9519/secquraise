import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  return (
    <>
    <div className="flex flex-row bg-[#001C7B] h-10">
    <div className=" text-[#007883] text-left pl-8 font-serif pt-2"> SECQUR<span className='text-[red] '>AI</span>SE</div>
    <div className="flex flex-row" style={{marginLeft:"1100px"}}>
    <SearchIcon sx={{ color:"white",alignItems:"center",marginRight:"20px",marginTop:"10px"}}/>
    <div className="w-14 border mb-2 border-[black] bg-[#92D050]  mt-2 text-center justify-center">25</div>
    <div className="w-14 border mb-2 border-[black] bg-[#FF0000] ml-10 mt-2 pl-4">25</div>
    </div>
    </div>
    </>
  )
}

export default Navbar