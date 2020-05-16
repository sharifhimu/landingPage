import React from 'react';
// import { Card,CardTitle,CardActions,CardText,Button} from 'react-mdl';
import {Card,Button} from 'react-bootstrap';

const Projects = (props) => {
	return(
	
					
				
					<div  style={{padding: '20px'}}>


          
 					{/*corona sun illustration*/}
			{/*		<Card  shadow={0} style={{width: '300px', height: '300px', padding: '0px'}}  >
						<a className="projects" rel="noopener noreferrer" target="_blank" href={props.click}>
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url({props.cardurl}) center / cover'}}>
					    
							  <img src={props.click} alt="corona" style={{width: "0px" }} />
						
						 </CardTitle>
						</a>

					    <CardText>
					        <span style={{fontSize: '15px',fontWeight: 'bold'}}>{props.cardname}</span>
					    </CardText>
					    
					    <CardActions border>
					     <a href={props.button}>
					        
					        <Button primary ripple >View on Behance</Button>

					    	</a>
					    </CardActions>
					   	</Card>					*/}

				<a  rel="noopener noreferrer" target="_blank" href={props.referance}>
				<Card className="projects text-white" style={{width: '400px', height: '240px', padding: '2px',margin: 'center'}}>
				
				  <Card.Img className="cardimg " src={props.cardimg} alt="Card image" />
				  
				   
				  <Card.ImgOverlay>
				    <Card.Title style={{float: 'left'}}>{props.name}</Card.Title>
				{/*    <Card.Text>
				      This is a wider card with supporting text below as a natural lead-in to
				      additional content. This content is a little bit longer.
				    </Card.Text>		
				    <Card.Text>Last updated 3 mins ago</Card.Text>		*/}
				     <a target="_blank" rel="noopener noreferrer" href={props.button}>
				  <Button className="btn" style={{margin: '120px'}} >View full Project</Button>
				  </a>
				  </Card.ImgOverlay>
				  
				</Card>	   	      
				</a>
                                     

              </div>
			 
			 	

				
	
);
}

export default Projects;
