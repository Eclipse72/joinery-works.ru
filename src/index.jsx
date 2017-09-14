import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
// import { Router, Route, hashHistory} from 'react-router';

import Header from './header';
import Footer from './footer';
// import Footer from './footer';

import './index.css';
import 'normalize-css';

var menu = [
	{
		'label': 'Главная',
		'link': '/'
	}, 
	{
		'label': 'О нас',
		'link': '/about'
	}, 
	// {
	// 	'label': 'Услуги',
	// 	'link': '/serveces'
	// },
	// {
	// 	'label': 'Проекты',
	// 	'link': '/projects'
	// },
	// {
	// 	'label': 'Команда',
	// 	'link': '/team'
	// },
	{
		'label': 'Контакты',
		'link': '/contacts'
	}
];

const App = () => (
  <div>
    <Header items={menu}/>
    <Main />
    <Footer items={menu}/>
  </div>
)

const Home = () => (
  <div>
    <p>Home</p>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about'>
      	<p>О нас</p>
      </Route>
      <Route path='/contacts'>
      	<p>Контакты</p>
      </Route>
    </Switch>
  </main>
)

ReactDom.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);