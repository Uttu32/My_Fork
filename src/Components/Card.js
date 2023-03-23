import React from "react";
import "./Card.css"
export default function Card(props){

  return(
    
    <div className="CardParent">
      <img src={props.obj.image}/>
      <h3> {props.obj.name}</h3>
      <p>{props.obj.description}</p>
    </div>
  )
}