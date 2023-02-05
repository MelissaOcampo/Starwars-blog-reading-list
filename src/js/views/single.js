import React, {
    useState,
    useEffect,
    useContext
} from "react";
import PropTypes from "prop-types";
import {
    Link,
    useParams
} from "react-router-dom";
import {
    Context
} from "../store/appContext";

export const Single = props => {
    const {store,actions} = useContext(Context);
    const params = useParams(); //"useParams" para obtener los parámetros de la URL.
    useEffect(() => { //"useEffect" para ejecutar una acción cuando se monta el componente.
       actions.infoDePersonaje(params.theid); //se está llamando a una función "infoDePersonaje" que recibe como argumento el valor "params.theid".
        
    },[])
    let id=params.theid; // Se utiliza para acceder y trabajar con valores específicos dentro de un objeto.
    return ( 
        <>
        <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={"https://starwars-visualguide.com/assets/img/characters/"+ (id) +".jpg"} className="img-fluid rounded-start" alt="..." style={{height:"600px", width:"800px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title fs-1">{store.infoPersona.properties?.name}</h5>
        <p className="card-text fs-3"> {store.infoPersona.properties?.height}</p>
        <p className="card-text fs-3"> {store.infoPersona.properties?.hair_color} </p>
        <p className="card-text fs-3"> {store.infoPersona.properties?.skin_color}</p>
        <p className="card-text fs-3"> {store.infoPersona.properties?.eye_color} </p>
        <p className="card-text fs-3"> {store.infoPersona.properties?.birth_year} </p>
      </div>
    </div>
  </div>
</div>

        <div>
        <Link to = "/" >
        <span className = "btn btn-primary btn-lg"
        href = "#"
        role = "button" >
        Back home </span> </Link> </div>
        </>
    );
};

Single.propTypes = {
    match: PropTypes.object
};