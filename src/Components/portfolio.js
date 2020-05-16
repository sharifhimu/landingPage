import React, { Component } from 'react';
// import {Grid ,Cell} from 'react-mdl';

import {Jumbotron, Container, Row, Col} from 'react-bootstrap';
import {Tabs,Tab, Grid, Cell, Card,CardTitle,CardActions,CardText,Button} from 'react-mdl';



class portfolio extends Component{
		constructor(props){
			super(props);
			this.state = {activeTab: 0};
		}
		
		toggloCategories(){
			if(this.state.activeTab === 0){
				return(
					<div className="project-grid">
										   	
					{/*corona sun illustration*/}
					<Card  shadow={0} style={{width: '400px', height: '300px', margin: 'left',padding: '0px'}}  >
						<a className="projects" rel="noopener noreferrer" target="_blank" href="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f071e394816097.5e8823af88d01.png">
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f071e394816097.5e8823af88d01.png) center / cover'}}>
					    
							  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f071e394816097.5e8823af88d01.png" alt="Corona" style={{width: "0px" }} />
						
						 </CardTitle>
						</a>

					    <CardText>
					        <span style={{fontSize: '15px',fontWeight: 'bold'}}>Corona Earth illustration</span>
					    </CardText>
					    
					    <CardActions border>
					     <a href="https://www.behance.net/gallery/94816097/Covid19-corona-virus-earth-illustration">
					        
					        <Button primary ripple >View on Behance</Button>

					    	</a>
					    </CardActions>
					   	</Card>		

					   	{/*corona police doctor illustration*/}
					<Card shadow={0} style={{width: '300px', margin: 'left',padding: '0px'}}>
						<a className="projects" rel="noopener noreferrer" target="_blank" href="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/cd758894709723.5e858de4badba.jpg">
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/cd758894709723.5e858de4badba.jpg) center / cover'}}>
					    	 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/cd758894709723.5e858de4badba.jpg" alt="Corona" style={{width: "0px"}} />
					    </CardTitle>
					    </a>
					    <CardText>
					        <span style={{fontSize: '15px',fontWeight: 'bold'}}>Corona Let them control illustration</span>
					    </CardText>
					    <CardActions border>
					     <a href="https://www.behance.net/gallery/94709723/Corona-virus-covid_19-let-them-control-it">
					        <Button primary ripple >View on Behance</Button>

					    	</a>
					    </CardActions>
					   	</Card>		

					   	{/*corona dont handshake illustration*/}
					<Card shadow={0} style={{width: '300px', margin: 'left',padding: '0px'}}>
					<a className="projects" rel="noopener noreferrer" target="_blank" href="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a28cca94709451.5e858bddd9643.jpg">

					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a28cca94709451.5e858bddd9643.jpg) center / cover'}}>
					     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a28cca94709451.5e858bddd9643.jpg" alt="Corona" style={{width: "0px"}} />
					    </CardTitle>
					    </a>
					    <CardText>
					         <span style={{fontSize: '15px',fontWeight: 'bold'}}>Corona Don't spread Illustration</span>
					    </CardText>
					    <CardActions border>
					     <a href="https://www.behance.net/gallery/94709451/Covid_19-Corona-virus-social-awareness">
					        <Button primary ripple >View on Behance</Button>
					    	</a>
					    </CardActions>
					   	</Card>		   						
					</div>
					);

			}
		else if(this.state.activeTab === 1){
				return(
						<div className="project-grid">	
							  	{/*logo 1*/}
					<Card shadow={0} style={{width: '300px', margin: 'left',padding: '0px'}}>
						<a className="projects" rel="noopener noreferrer" target="_blank" href="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/2c899a84567691.5d60d38f4e03b.jpg">
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/2c899a84567691.5d60d38f4e03b.jpg) center / cover'}}>
					     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/2c899a84567691.5d60d38f4e03b.jpg" alt="Corona" style={{width: "0px"}} />
					    </CardTitle>

					    </a>
					    <CardText>
					        <span style={{fontSize: '15px',fontWeight: 'bold'}}>U letter logo</span>
					    </CardText>
					    <CardActions border>
					     <a href="https://www.behance.net/gallery/84567691/Letter-logofolio-4">
					        <Button primary ripple >View on Behance</Button>
					    	</a>
					    </CardActions>
					   	</Card>	

					   		{/*logo 2*/}
					<Card shadow={0} style={{width: '300px', margin: 'left',padding: '0px'}}>
					<a className="projects" rel="noopener noreferrer" target="_blank" href="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b7bc3384566781.5d60c4600b676.jpg">
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b7bc3384566781.5d60c4600b676.jpg) center / cover'}}>
					     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b7bc3384566781.5d60c4600b676.jpg" alt="Corona" style={{width: "0px"}} />
					    </CardTitle>
					    </a>
					    <CardText>
					         <span style={{fontSize: '15px',fontWeight: 'bold'}}>Letter-logofolio-1</span>
					    </CardText>
					    <CardActions border>
					     <a href="https://www.behance.net/gallery/84566781/Logo-folio-1">
					        <Button primary ripple >View on Behance</Button>
					    	</a>
					    </CardActions>
					   	</Card>	

					   		{/*logo 3 dai phet*/}
					<Card shadow={0} style={{width: '300px', margin: 'left',padding: '0px'}}>
					<a className="projects" rel="noopener noreferrer" target="_blank" href="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ec8b4983098521.5d31a2717ec9f.jpg">
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ec8b4983098521.5d31a2717ec9f.jpg) center / cover'}}>
					      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ec8b4983098521.5d31a2717ec9f.jpg" alt="Corona" style={{width: "0px"}} />
					    </CardTitle>
					    </a>
					    <CardText>
					          <span style={{fontSize: '15px',fontWeight: 'bold'}}>Dai phet Real estate Logo</span>
					    </CardText>
					    <CardActions border>
					     <a href="https://www.behance.net/gallery/83098521/Real-estate-logo-design-Di-Phat">
					        <Button primary ripple >View on Behance</Button>
					    	</a>
					    </CardActions>
					   	</Card>	

						</div>
					)
			}
			else if(this.state.activeTab === 2){
				return(
						<div className="project-grid">

							{/*mujib borso motion*/}
					<Card shadow={0} style={{width: '300px', margin: 'left',padding: '0px'}}>
					<a className="projects" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1HDFQg2ArlV3SH2N5rYKfiUOlL9UwYfRl">
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4d721b92638475.5e4ffdb2c3fac.jpg) center / cover'}}>
					     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4d721b92638475.5e4ffdb2c3fac.jpg" alt="Corona" style={{width: "0px"}} />
					    </CardTitle>
					    </a>
					    <CardText>
					         <span style={{fontSize: '15px',fontWeight: 'bold'}}>Mujib borso motion graphics</span>
					    </CardText>
					    <CardActions border>
					     <a href="https://www.behance.net/gallery/92638475/golden-logo-animation">
					        <Button primary ripple >View full video</Button>
					    	</a>
					    </CardActions>
					   	</Card>	

					   		{/*blotter effect motion*/}
					<Card shadow={0} style={{width: '300px', margin: 'left',padding: '0px'}}>
					<a className="projects" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1x5Ofu385TacZVdGvQKhbDRjMd2WAAmHL">
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/86e53f94935093.5e8b5ae19f361.jpg) center / cover'}}>
					     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/86e53f94935093.5e8b5ae19f361.jpg" alt="Corona" style={{width: "0px"}} />
					    </CardTitle>
					    </a>
					    <CardText>
					          <span style={{fontSize: '15px',fontWeight: 'bold'}}>Blotter effect Dance motion graphics</span>
					    </CardText>
					    <CardActions border>
					     <a href="https://www.behance.net/gallery/94935093/Blotter-effect-motion-graphics">
					        <Button primary ripple >View full video</Button>
					    	</a>
					    </CardActions>
					   	</Card>	

					   	 		{/*wiggle story*/}
					<Card shadow={0} style={{width: '300px', margin: 'left',padding: '0px'}}>
					<a className="projects" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1UFW4fbOKl2hcFtEeB4IbRX6a0qbtNLSS">
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/3a639a91796819.5e3af3f0437ec.jpg) center / cover'}}>
					     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3a639a91796819.5e3af3f0437ec.jpg" alt="Corona" style={{width: "0px"}} />
					    </CardTitle>
					    </a>
					    <CardText>
					          <span style={{fontSize: '15px',fontWeight: 'bold'}}>Wiggle story</span>
					    </CardText>
					    <CardActions border>
					     <a href="behance.net/gallery/91796819/A-wiggle-story-1-min-cartoon">
					        <Button primary ripple >View full video</Button>
					    	</a>
					    </CardActions>
					   	</Card>	

						</div>
					)
			}
			else if(this.state.activeTab === 3){
				return(
						<div className="project-grid">
							{/*Balance it*/}
					<Card shadow={0} style={{width: '300px', margin: 'left',padding: '0px'}}>
						<a target="_blank" rel="noopener noreferrer" href="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c2fa5590233065.5e122f13d43a1.png">
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c2fa5590233065.5e122f13d43a1.png) center / cover'}}>
					      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c2fa5590233065.5e122f13d43a1.png" alt="Corona" style={{width: "0px"}} />

					    </CardTitle>
					    </a>
					    <CardText>
					         <span style={{fontSize: '15px',fontWeight: 'bold'}}>Balance it android game</span>
					    </CardText>
					    <CardActions border>
					     <a href="https://www.behance.net/gallery/90233065/Balance-IT-android-game">
					        <Button raised colored>View Game UI Design</Button>
					    	</a>
					    	<hr />
					    	<a href="https://github.com/sharifhimu/balance_IT-Game-project">
					        <Button primary ripple >View Game Project</Button>
					    	</a>
					    </CardActions>
					   	</Card>	

					   {/*ring ball*/}
					<Card shadow={0} style={{width: '300px', margin: 'left',padding: '0px'}}>
					<a target="_blank" rel="noopener noreferrer" href="https://lh3.googleusercontent.com/ZbEZ6wUXugKCz67Ovoon1fUseTeKgqmH-fRUgRO2FsspEgLzl4MxN4znVLFSGFiMLg">
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://lh3.googleusercontent.com/ZbEZ6wUXugKCz67Ovoon1fUseTeKgqmH-fRUgRO2FsspEgLzl4MxN4znVLFSGFiMLg) center / cover'}}>
					     <img src="https://lh3.googleusercontent.com/ZbEZ6wUXugKCz67Ovoon1fUseTeKgqmH-fRUgRO2FsspEgLzl4MxN4znVLFSGFiMLg" alt="Corona" style={{width: "0px"}} />
					    </CardTitle>
					    </a>
					    <CardText>
					         <span style={{fontSize: '15px',fontWeight: 'bold'}}>Ring ball android game</span>
					    </CardText>
					    <CardActions border>
					     <a href="https://apps.apple.com/app/id1449573472?fbclid=IwAR01ddRSvQNTFYobDZ_8gdFSRqxRDGuXd4__xJckFv0c57EYMW10PcZPOGU">
					        <Button primary ripple >View Game Link</Button>
					    	</a>
					    </CardActions>
					   	</Card>	

						</div>
					)
			}
		}

		render(){
			return(
					
					<Jumbotron className="bg-transparent Jumbotron-fluid p-0  ">
				<Container fluid={true}>
					<Row className="py-5 justify-content-center ">
						<Col  lg={true} >
			
			       <div className ="category-tabs">
			       	<Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
			       		<Tab> Illustration</Tab>
			       		<Tab> Logo Design</Tab>
			       		<Tab> Motion Graphics</Tab>
			       		<Tab> Game design</Tab>
			       	</Tabs>

			       	
			       		<Grid>
			       			<Cell col={12}>
			       				<div className="content">
			       					{this.toggloCategories()}
			       				</div>
			       			</Cell>
			       		</Grid>
			       		
			      

			       </div>
			       
			       </Col>
					</Row>
				</Container>
			</Jumbotron>

						);
							}
								}

export default portfolio;