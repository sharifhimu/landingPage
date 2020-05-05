import React, { Component } from 'react';
// import {Grid ,Cell} from 'react-mdl';
import Hero from './Hero';

import projects from './projects';
import {info} from './info';

// import {Jumbotron, Container, Row, Col, Image} from 'react-bootstrap';

import { Card,CardTitle,CardActions,CardText,Button} from 'react-mdl';


class landingPage extends Component{
		render(){
			return(
			             <div >
			
					      <Hero />  

					
					      
			    
     		<h1 className="recent-project">Recent Projects</h1>
          
     				
     				  <div className="recent-grid">

     			{/*		<projects click={info[0].click} cardurl={info[0].cardurl} cardname={info[0].cardname} button={info[0].button} />   */}
           
     					<projects />
           

					   		<hr/>

					   	</div>

     				
					   		</div>
     					
     				
			       	  

			       	  

						);
							}
								}

export default landingPage;

		

{/*	<div className="see-more">
					    <a href="/portfolio"> <h2 >See more</h2> </a>
					    </div>    */}