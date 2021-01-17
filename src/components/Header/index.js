import React from 'react';
//import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import './index.css';


function Header(){
	return(
		<header className="header">
			<h1>Dash</h1>
					 <ul>
						 <li>
							 <a href="/">Home</a>
						 </li>
						 <li>
							 <a href="/novo-produto">+Produto</a>
						 </li>
						 <li>
						 	<a href="/nova-categoria">+Categoria</a>
						 </li>
					</ul>
		</header>
	);

}

export default Header;
