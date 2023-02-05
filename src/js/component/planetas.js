import React, {useContext} from  "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Planets = (props) => {

const {store,actions} = useContext(Context);
    return (
      <div className="col m-4">
      <div className="card" style={{width: "18rem"}}>
        {/* https://starwars-visualguide.com/assets/img/characters/3.jpg */}
  <img src={"https://starwars-visualguide.com/assets/img/planets/"+props.id+".jpg"} className="card-img-top" alt="..."/> 
  <div className="card-body">
    <h5 className="card-title">{props.nombre}</h5> 
    <Link to={"/detallesPlanetas/"+props.id} className="btn btn-dark float-start">Learn more!</Link>
    <button className="btn btn-danger" onClick={()=>{actions.agregarFavoritos(props.nombre); console.log(props.nombre)}}>like</button>
  </div>
</div>
</div>
    );
};