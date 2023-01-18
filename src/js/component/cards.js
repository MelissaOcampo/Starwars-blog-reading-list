import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
console.log(props);
    return (
      <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/> 
  <div className="card-body">
    <h5 className="card-title">{props.nombre}</h5> 
    <Link to={"/single/"+props.id} className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    );
};