import React, { Component } from 'react';

import KtGif  from '../../videos/Peek-ktapplication.gif';

class ProjectKt extends Component {
  render() {
    return (
      <div className="project">
      	<div className="project-content">
      		<h1>Kt Management Software</h1>
      		<div className="project-specifications">
      			<h3 className="bullet-point"><i class="fas fa-asterisk small-asterick"></i>
      				Hosted by Amazon Web Service using EC2 and ubuntu 16.04
      			</h3>
      			<h3 className="bullet-point"><i class="fas fa-asterisk small-asterick"></i>
      				Web server built with Lumen, a PHP micro framework
      			</h3>
      			<h3 className="bullet-point"><i class="fas fa-asterisk small-asterick"></i>
      				Restful API protected by Json Web Token technology
      			</h3>
      			<h3 className="bullet-point"><i class="fas fa-asterisk small-asterick"></i>
      				Frontend built with Electron and ReactJs
      			</h3>
      		</div>
      	</div>
    		<img className="project-gif" src={KtGif} alt="loading..." />
      </div>
    );
  }
}

export default ProjectKt;
