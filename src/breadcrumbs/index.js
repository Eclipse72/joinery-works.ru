import React from 'react'

import './style.css'

const Breadcrumbs = (props) => {

	return(
		<div className="text-white">
			<div className="text-extra-big">Услуги</div>
			<ul className="breadcrumbs" >
				<li><a href="#">Главная</a></li>
				<li><a href="#">Услуги</a></li>
			</ul>
		</div>
	)
}

export default Breadcrumbs