import React from 'react'

const Box1 = (props) => {
  return (
    <>
      <div className="m-10">
        <div className="text-xl font-bold mt-14  ">{props.id.ID}</div>
        <div className="text-xl font-bold">Person Detected</div>
        <div className="text-xl mt-2">Name  :{props.id.Name}</div>
        <div className="text-xl">Location : {props.id.Location}</div>
        <div className="text-xl">Date : {props.id.Date}</div>
        <div className="text-xl">Time : {props.id.Time}</div>
        <div className="text-xl mt-10 font-bold">Description :</div>
        <div className="text-xl">{props.id.Name} detected at {props.id.Location} on<br/> {props.id.Date}</div>
      </div>
    </>
  )
}

export default Box1