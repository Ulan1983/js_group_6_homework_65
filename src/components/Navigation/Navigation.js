import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import {CATEGORIES} from "../../constants";


const Navigation = () => (
		<Navbar color="light" light expand="md">
			<NavbarBrand>Static pages</NavbarBrand>
			<Nav className="ml-5" navbar>
				<NavItem>
					<NavLink tag={RouterNavLink} to="/" exact>Home</NavLink>
				</NavItem>
				{CATEGORIES.map(c => (
					<NavItem key={c}>
						<NavLink className="text-capitalize" tag={RouterNavLink} to={"/pages/" + c} exact>{c}</NavLink>
					</NavItem>
				))}
				<NavItem>
					<NavLink tag={RouterNavLink} to="/pages/admin">Admin</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	);


export default Navigation;