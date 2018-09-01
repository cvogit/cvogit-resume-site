import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import '../css/footer.css';

class Footer extends Component {
  render() {

  	const data = this.props.data;
    return (
      <div id='footer' className="footer">
      	<div className="section-container-responsive">
          <div className="footer-right-container">
            <h4 className="footer-font">Email: {data.contact.email}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
