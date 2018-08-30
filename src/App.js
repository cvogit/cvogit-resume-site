import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import Home 	from 	'./components/Home';
import About 	from './components/About';
import Skills from './components/Skills';
import Projects 	from './components/Projects';


import './css/App.css';

import Data from './resume.json';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll(value) {
		console.log(value);
		var element = 'home';
		if (value === 'about') {
			element = document.getElementById('about');
		} else if (value === 'skills') {
			element = document.getElementById('skills');
		} else if (value === 'projects') {
			element = document.getElementById('projects');
		}

		if (element !== null)
    	element.scrollIntoView({behavior: 'smooth'});
	}

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
							<NavItem eventKey={1} onClick={() => this.handleScroll('about')}>
								About
							</NavItem>
							<NavItem eventKey={2} onClick={() => this.handleScroll('skills')}>
								Skills
							</NavItem>
							<NavItem eventKey={3} onClick={() => this.handleScroll('projects')}>
								Projects
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Home data={Data.home} />
				<About id="about" data={Data.about} />
				<Skills id="skills" data={Data.skills} />
				<Projects id="projects" data={Data.projects} />
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
