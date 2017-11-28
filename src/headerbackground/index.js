import React from 'react'

import './style.css';

const HeaderBackground = (props) => {
	return(
		<div className="headerbackground" >
			{props.children}
		</div>
	)
}

export default HeaderBackground