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
    return ( 
        <>
        <div className = "jumbotron" >
        
        
        <h1>{store.infoPersona.properties?.height}</h1>   
        <h1>{store.infoPersona.properties?.hair_color}</h1>   
        <h1>{store.infoPersona.properties?.skin_color}</h1> 
        <h1>{store.infoPersona.properties?.eye_color}</h1>  
        <h1>{store.infoPersona.properties?.birth_year}</h1> 
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