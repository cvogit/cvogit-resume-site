import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import '../css/skills.css';

import AwsLogo from '../images/aws_logo.png';
import ElectronLogo from '../images/electron_logo.png';
import LumenLogo from '../images/lumen_logo.png';
import MagentoLogo from '../images/magento2_logo.png';
import MySQLLogo from '../images/mysql_logo.png';
import ReactLogo from '../images/reactjs_logo.png';


class Skills extends Component {
  render() {

  	const data = this.props.data;
    return (
      <div id='skills' className="skills">
      	<div className="section-container-responsive">
    			<div className="section-title-responsive">
    				<h1 className="title">SKILLS</h1>
    			</div>
    			<div className="section-content-responsive">
            <div className="section-block-33">
              <Card className="card">
                <CardMedia
                  className="card-media"
                  image={AwsLogo}
                  title="Amazon Web Services"
                />
                <CardContent>
                  <Typography className="card-title" gutterBottom variant="headline" component="h2">
                    Amazon Web Services
                  </Typography>
                  <Typography className="card-typo" component="p">
                   {data.AWS}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="section-block-33">
              <Card className="card">
                <CardMedia
                  className="card-media"
                  image={ElectronLogo}
                  title="Amazon Web Services"
                />
                <CardContent>
                  <Typography className="card-title" gutterBottom variant="headline" component="h2">
                    Electron
                  </Typography>
                  <Typography className="card-typo" component="p">
                   {data.Electron}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="section-block-33">
              <Card className="card">
                <CardMedia
                  className="card-media"
                  image={LumenLogo}
                  title="Lumen"
                />
                <CardContent>
                  <Typography className="card-title" gutterBottom variant="headline" component="h2">
                    Lumen
                  </Typography>
                  <Typography className="card-typo" component="p">
                   {data.Lumen}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="section-block-33">
              <Card className="card">
                <CardMedia
                  className="card-media"
                  image={MagentoLogo}
                  title="Magento 2"
                />
                <CardContent>
                  <Typography className="card-title" gutterBottom variant="headline" component="h2">
                    Magento 2
                  </Typography>
                  <Typography className="card-typo" component="p">
                   {data.Magento2}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="section-block-33">
              <Card className="card">
                <CardMedia
                  className="card-media"
                  image={MySQLLogo}
                  title="MySQL"
                />
                <CardContent>
                  <Typography className="card-title" gutterBottom variant="headline" component="h2">
                    MySQL
                  </Typography>
                  <Typography className="card-typo" component="p">
                   {data.MySQL}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="section-block-33">
      				<Card className="card">
                <CardMedia
                  className="card-media"
                  image={ReactLogo}
                  title="ReactJs"
                />
                <CardContent>
                  <Typography className="card-title" gutterBottom variant="headline" component="h2">
                    ReactJs
                  </Typography>
                  <Typography className="card-typo" component="p">
                   {data.ReactJs}
                  </Typography>
                </CardContent>
              </Card>
            </div>
    			</div>
    		</div>
      </div>
    );
  }
}

export default Skills;
