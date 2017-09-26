import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './header';
import Slider from './slider';
import Footer from './footer';

import 'normalize-css';

var menu = [
	{
		'id': '1',
		'label': 'Главная',
		'link': '/'
	}, 
	{
		'id': '2',
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
		'id': '3',
		'label': 'Контакты',
		'link': '/contacts'
	}
];

const App = () => (
  <div>
    <Header items={menu}/>
    <Slider />
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

