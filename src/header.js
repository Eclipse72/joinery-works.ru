import React, { Component } from 'react';

import Logo from './logo';
import Menu from './menu';
import IconsList from './iconslist';

import './header.css';

const Header = props => {
	return(
		<header className="page-header">
			<Logo />
			<Menu items={props.items} />
			<IconsList />
		</header>
	)
};

export default Header;