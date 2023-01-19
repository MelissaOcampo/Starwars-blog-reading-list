import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const {store,actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" style={{width:"90px"}} alt=""/>
			</Link>
			<div className="btn-group">
  <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
  {store.favoritos.map((element, index) =><li key={index}><button className="dropdown-item" type="button" key={index}>{element}</button></li>
                    )}
  </ul>
</div>
		</nav>
	);
};
