import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Menu = ({items}) => {
	return(
		<nav className='menu'>
			<ul>
				{items.map((item, index) =>
					<li key={index} > <Link to={item.link} > {item.label}</Link></li>
				)}
			</ul>
		</nav>
	)
}

export default Menu;