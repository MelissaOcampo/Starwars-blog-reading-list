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
    const params = useParams();
    useEffect(() => {
       actions.infoDePersonaje(params.theid);
        
    },[])
    let id=params.theid;
    return ( 
        <>
        <div className = "jumbotron" >
        <img src={"https://starwars-visualguide.com/assets/img/characters/"+ (id) +".jpg"} className="mb-4 border border-white rounded-3" alt="Luke"style={{height:"300px", width:"300px"}}/>
        
        <p>{store.infoPersona.properties?.height}</p>   
        <p>{store.infoPersona.properties?.hair_color}</p>   
        <p>{store.infoPersona.properties?.skin_color}</p> 
        <p>{store.infoPersona.properties?.eye_color}</p>  
        <p>{store.infoPersona.properties?.birth_year}</p> 
          <hr className = "my-4" />

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