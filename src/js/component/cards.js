import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
console.log(props);
    return (
      <div className="card" style={{width: "18rem"}}>
        {/* https://starwars-visualguide.com/assets/img/characters/3.jpg */}
  <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.id+".jpg"} className="card-img-top" alt="..."/> 
  <div className="card-body">
    <h5 className="card-title">{props.nombre}</h5> 
    <Link to={"/single/"+props.id} className="btn btn-primary">Learn more!</Link>
    <button className="btn btn-danger" onClick={()=>actions.agregarFavorito()}>like</button>
  </div>
</div>
    );
};