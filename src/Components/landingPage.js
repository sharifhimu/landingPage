import React, { Component } from 'react';
// import {Grid ,Cell} from 'react-mdl';
import Hero from './Hero';

import Projects from './projects';
import {Recent} from './info';

// import {Jumbotron, Container, Row, Col, Image} from 'react-bootstrap';

// import { Card,CardTitle,CardActions,CardText,Button} from 'react-mdl';


class landingPage extends Component{
		render(){
			return(
			             <div >
			
					      <Hero />  

					
					      
			    
     		<h1 className="recent-project">Recent Projects</h1>
          
     				<div className="recent-grid">
     				  

     				<Projects referance={Recent[0].referance} cardimg={Recent[0].cardimg} name={Recent[0].name} button={Recent[0].button} />  
     				<Projects referance={Recent[1].referance} cardimg={Recent[1].cardimg} name={Recent[1].name} button={Recent[1].button} /> 
     				<Projects referance={Recent[2].referance} cardimg={Recent[2].cardimg} name={Recent[2].name} button={Recent[2].button} /> 
     				<Projects referance={Recent[3].referance} cardimg={Recent[3].cardimg} name={Recent[3].name} button={Recent[3].button} /> 
     				<Projects referance={Recent[4].referance} cardimg={Recent[4].cardimg} name={Recent[4].name} button={Recent[4].button} /> 
     				<Projects referance={Recent[5].referance} cardimg={Recent[5].cardimg} name={Recent[5].name} button={Recent[5].button} /> 
     				<Projects referance={Recent[6].referance} cardimg={Recent[6].cardimg} name={Recent[6].name} button={Recent[6].button} /> 
     					
           

					   		<hr/>

					 	</div>
				 {/* 		<div className="see-more">
					    <a href="/portfolio"> <h2 >See more</h2> </a>
					    </div>  */}    
     				
					   		</div>
     					
     				
				       	  

			       	  

						);
							}
								}

export default landingPage;

		

