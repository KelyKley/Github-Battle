import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

import Home from './Home';
import BattleUsers from "./BattleUsers";
//import SignUp from './SignUp';
//import SendCode from "./SendCode"
//import SignUpForm from './SignUpForm';
import Player from './Player';

const NotFound = (props) => {
	return (
		<div><h2> Error 404! </h2></div>
	);
}

const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/"
				    render={() => <Redirect to= {'/home'}/>}/>
				<Route path="/Proyecto-Lyft"
					render={() => <Redirect to= {'/home'}/>}/>
				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route  path="/BattleUsers" render={() => <BattleUsers model={model} />}/>

				<Route component={NotFound}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;
