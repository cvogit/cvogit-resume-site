import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import Home 	from 	'./components/Home';
import About 	from './components/About';
import Skills from './components/Skills';
import Projects 	from './components/Projects';


import './css/App.css';

import Data from './resume.json';

class App extends Component {

	RenderApp = () => {
		
		return (
			<div className="App">
				<Navbar fixedTop inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#brand">Cvogit</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} href="#">
								Link
							</NavItem>
							<NavItem eventKey={2} href="#">
								Link
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Home data={Data.home} />
				<About data={Data.about} />
				<Skills data={Data.skills} />
				<Projects data={Data.projects} />
			</div>
		);
	}

	render() {

		return (
			<this.RenderApp />
		);
	}
}

export default App;
