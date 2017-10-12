import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import PropTypes from 'prop-types';

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
  Link
} from "react-router-dom";
import {
  Button,
  Grid,
  Col,
  Row,
  InputGroup,
  FormControl,
  Dropdown,
  MenuItem
} from "react-bootstrap";
import "./Home.css";
import Player from './Player';

class PlayerInput extends Component {

	constructor(props){
		super(props);

		this.state = {
			username: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		var value = event.target.value;

		this.setState(function(){
			return {
				username: value
			}
		})
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.onSubmit(
			this.props.id, 
			this.state.username)
	}

	render(){
		return (
				<form className="column" onSubmit={this.handleSubmit}>
					<label className="header" htmlFor="username">{this.props.label}</label>
					<input 
						id="username" 
						placeholder="github username" 
						type="text"
						value={this.state.username}
						onChange={this.handleChange} 
						autoComplete="off" />

					<button 
						className="button" 
						type="submit" 
						disabled={!this.state.username}>
						Submit
					</button>

				</form>
			)
	}
}

PlayerInput.PropTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired
}



class BattleUsers extends Component{
	constructor(props){
		super(props);

		this.state = {
			playerOneName: '',
			playerTwoName: '',
			playerOneImage: null,
			playerTwoImage: null
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);

	}


	handleSubmit(id, username){
		this.setState(function(){
			var newState = {}
			newState[id + 'Name'] = username
			newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200;'
			return newState;
		})
	}

	handleReset(id){
		this.setState(function(){
			var newState = {}
			newState[id + 'Name'] = ''
			newState[id + 'Image'] = null;
			return newState;
		})
	}

	render(){
		var match = this.props.match;
		var playerOneName = this.state.playerOneName;
		var playerTwoName = this.state.playerTwoName;
		var playerOneImage = this.state.playerOneImage;
		var playerTwoImage = this.state.playerTwoImage;
		return (
				<div>
					<div className="row">
						{!playerOneName && 
							<PlayerInput 
								id='playerOne' 
								label='Player One'
								onSubmit={this.handleSubmit} />}

						{playerOneImage !== null && 
							<Player
								avatar={playerOneImage}
								username={playerOneName}
							>

							<button 
								className="reset"
								onClick={this.handleReset.bind(null, 'playerOne')}>
								Reset
							</button>

							</Player>
							}

						{!playerTwoName && 
							<PlayerInput 
								id='playerTwo' 
								label='Player Two'
								onSubmit={this.handleSubmit} />}

						{playerTwoImage !== null && 
							<Player
								avatar={playerTwoImage}
								username={playerTwoName}
							>

							<button 
								className="reset"
								onClick={this.handleReset.bind(null, 'playerTwo')}>
								Reset
							</button>

							</Player>}
					</div>

					{playerOneImage && playerTwoImage && 
						<Link 
							className='button'
							to={{
								pathname: match.url + '/results',
								search:`?playerOneName=` + playerOneName + `&playerTwoName=` + playerTwoName
							}}>
							Battle
						</Link>}
				</div>
			)
	}
}

export default BattleUsers;
