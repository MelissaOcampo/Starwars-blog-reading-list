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

export const DetallesVehiculos = props => {
    const {store,actions} = useContext(Context);
    const params = useParams();
    useEffect(() => {
       actions.infoDeVehiculo(params.theid);
        
    },[])
    let id=params.theid;
    return ( 
        <>
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+ (id) +".jpg"} className="img-fluid rounded-start" alt="..." style={{height:"600px", width:"800px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title fs-1">{store.infoVehiculos.properties?.name}</h5>
        <p className="card-text fs-3"> {store.infoVehiculos.properties?.model}</p>
        <p className="card-text fs-3"> {store.infoVehiculos.properties?.crew} </p>
        <p className="card-text fs-3"> {store.infoVehiculos.properties?.passengers}</p>
        <p className="card-text fs-3"> {store.infoVehiculos.properties?.vehicle_class} </p>
        <p className="card-text fs-3"> {store.infoVehiculos.properties?.cargo_capacity} </p>
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
