import React, { Component } from 'react';

import Logo from './logo';
import Menu from './menu';
import Slider from './slider';
import Paralax from './paralax';

const Header = props => {
	return(
		<header>
		<selection>
			<Logo/>
			<Menu items={props.items}/>
		</selection>
			<Slider/>
			<Paralax/>
		</header>
	)
};

export default Header;