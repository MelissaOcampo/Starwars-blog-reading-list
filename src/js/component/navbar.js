import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const {store,actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark.bg-gradient mb-3 d-flex">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" style={{width:"90px"}} alt=""/>
			</Link>
			<div className="btn-group">
  <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
  {store.favoritos.map((element, index) =><li className="dropdown-item" key={index}><button onClick={()=> actions.eliminarFavoritos(element)}  type="button" key={index}>{element}<i className="fa fa-trash"></i></button></li>
                    )}
					
  </ul>
</div>
		</nav>
	);
};
