import React, { Component } from 'react';

import Slider 		from "react-slick";
import ProjectKt from "./projectslides/ProjectKt"

import '../css/projects.css';

class Projects extends Component {
  render() {

  	var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
      <div id="projects" className="projects">
    		<div className="section-container-responsive">
    			<div className="section-title-responsive">
    				<h1 className="title">PROJECTS</h1>
    			</div>
    			<div className="section-content-responsive">
    				<Slider {...settings}>
        <div>
          <ProjectKt />
        </div>
      </Slider>
    			</div>
    		</div>
      </div>
    );
  }
}

export default Projects;
