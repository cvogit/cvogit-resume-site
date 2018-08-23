import React, { Component } from 'react';

import '../css/home.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll(event) {
		const element = document.getElementById('about');
    
    element.scrollIntoView({behavior: 'smooth'});
	}

  render() {
  	const data = this.props.data;

    return (
      <div className="home">
      	<div className="center-container">
      		<h1 className="responsive-headline">
      			{data.name}
      		</h1>
      		<div className="responsive-socials-container">
      			<ul className="responsive-socials-list">
    					<li>
    						<a href="https://github.com/cvogit">
      						<i class="fab fa-github my-icon"></i>
      					</a>
      				</li>
      			</ul>
	      	</div>
	      </div>
				<div className="bottom-container">
					<a onClick={this.handleScroll}>
      			<i class="fas fa-arrow-alt-circle-down my-icon fade-icon"></i>
					</a>
				</div>
      </div>
    );
  }
}

export default Home;
