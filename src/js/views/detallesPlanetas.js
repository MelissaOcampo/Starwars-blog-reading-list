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

export const DetallesPlanetas = props => {
    const {store,actions} = useContext(Context);
    const params = useParams();
    useEffect(() => {
       actions.infoDePlanetas(params.theid);
        
    },[])
    let id=params.theid;
    return ( 
        <>
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={"https://starwars-visualguide.com/assets/img/planets/"+ (id) +".jpg"} className="img-fluid rounded-start" alt="..." style={{height:"600px", width:"800px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title fs-1">{store.infoPlanetas.properties?.name}</h5>
        <p className="card-text fs-3"> {store.infoPlanetas.properties?.terrain}</p>
        <p className="card-text fs-3"> {store.infoPlanetas.properties?.gravity} </p>
        <p className="card-text fs-3"> {store.infoPlanetas.properties?.climate}</p>
        <p className="card-text fs-3"> {store.infoPlanetas.properties?.population} </p>
        <p className="card-text fs-3"> {store.infoPlanetas.properties?.diameter} </p>
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

// Single.propTypes = {
//     match: PropTypes.object
// };