import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Menu = ({items}) => {
	return(
		<nav className='menu'>
			{items.map((item) =>
				<NavLink 
					key={item.id} 
					to={item.link} 
					activeClassName="active" 
					exact={item.id=='1'?true:false}>{item.label}
				</NavLink>
			)}
		</nav>
	)
}

export default Menu;