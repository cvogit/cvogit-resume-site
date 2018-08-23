import React, { Component } from 'react';

import Chip from '@material-ui/core/Chip';

import profilePicture from '../images/profile.jpg';

import '../css/about.css';

class About extends Component {
  render() {

  	const summary = this.props.data.summary;
  	const tags 		= this.props.data.tags;

  	const renderChips = tags.map( (tag) => {
  		return <Chip className="tag" label={tag} />;
  	});

    return (
      <div id="about" className="about">
    		<div className="section-container-responsive">
    			<div className="section-title-responsive">
    				<h1 className="title">ABOUT</h1>
    			</div>
    			<div className="section-content-responsive">
            <div className="section-block">
              <div className="section-block-20">
                <img className="profile-picture" src={profilePicture} />
              </div>
              <div className="tags-container section-block-80">
                {renderChips}
              </div>
            </div>
    				<div className="section-block">
    					<h5 className="summary">
    						{summary}
    					</h5>
    				</div>
    			</div>
    		</div>
      </div>
    );
  }
}

export default About;
