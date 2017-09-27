import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Menu = ({items}) => {
	return(
		<nav className='menu'>
			<ul>
				{items.map((item) =>
					<li key={item.id} >
						<NavLink 
							to={item.link} 
							activeClassName="active" 
							exact={item.id=='1'?true:false}>{item.label}
						</NavLink>
					</li>
				)}
			</ul>
		</nav>
	)
}

export default Menu;