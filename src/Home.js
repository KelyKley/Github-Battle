import React, { Component } from "react";
import image from "./center.jpg";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";
import ReactBootstrap from 'react-bootstrap';
import { Grid, Col, Row, InputGroup, FormControl ,Dropdown, MenuItem, Nav, NavItem, NavDropdown, Navbar, Image} from 'react-bootstrap';
import "./Home.css";

class NavbarHome extends Component{
	render() {
		return (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Github Battle</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} ><NavLink exact to="/"> Home </NavLink></NavItem>
        <NavItem eventKey={2} ><NavLink to={"/BattleUsers"}> Battle </NavLink></NavItem>
        <NavItem eventKey={3}><NavLink to="/popular"> Popular </NavLink></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);}}


class TitleHome extends Component{
	render() {
		return (
    <div>
    <Grid>
    <Row className="text-center head">
      <Col xs={12} md={12}>
      <Row>
        <Col xs={12} md={12}>
          <h1>Github Battle</h1>
          <h3 className="text-center">Compare Developers</h3>
        </Col>
      </Row>
      </Col>
    </Row>
    </Grid>
  </div>

  );
} };


class BtnBattle extends Component {
	render () {
		return (
			<div>
        <Col md="5" xs="4"></Col>
        <Col md="2" xs="4"><NavLink to={"/BattleUsers"}	className="btn btn-lg btn-block btn-battle">Battle</NavLink></Col>
          <Col md="5" xs="4"></Col>
			</div>
		);
	};
}


class Img extends Component{
	render() {
		return (
  <Image src={image} responsive/>
);}}

class Home extends Component{
	render () {
		return(
			<div>
				<NavbarHome/>
				<TitleHome/>
        <br/>
        <BtnBattle/>
        <br/><br/>
        <Img/>
			</div>
		);
	};
}

export default Home;
