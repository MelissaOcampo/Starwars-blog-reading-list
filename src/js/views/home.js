import "../../styles/home.css";
import {Card} from "../component/cards.js"
import React, {useEffect, useState, useContext} from "react";//1. llamar al hook useContext
import {Context} from "../store/appContext.js" //2. importar el Contexto

export const Home = () => {
	
	const {store}=useContext(Context)//3.Activo el uso del contexto y desestructuro las propiedad que quiero utilizar

	return(
	<>
	<div className="text-center d-flex m-4">
		{store.personajes.map((item)=><Card nombre={item.name} id={item.uid} key={item.uid}/>)}
	</div>
	</>
)};
