import React, { Component } from 'react';

import Logo from './logo';
import Menu from './menu';
import Slider from './slider';
import IconsList from './iconslist';

const Header = props => {
	return(
		<header>
		<selection>
			<Logo />
			<Menu items={props.items} />
			<IconsList />
		</selection>
			<Slider />
		</header>
	)
};

export default Header;