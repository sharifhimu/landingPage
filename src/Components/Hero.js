import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';


const Hero =() => {
	return(

			<div className="hero-image">
	{/*	 <Jumbotron className="bg-transparent Jumbotron-fluid p-0  ">  */}
					
				<Container fluid={true}>
					
					<Row className="py-5 justify-content-center ">
						<Col sm={12} md={15} p-0 >
								
								
						{/*	<p className="display-5 font-weight-bold text-light mx-3 my-0 ">Hi There </p>  */}
							
						<p className="display-4 font-weight-bold text-light p-0 font-italic my-0">This is Sharif Himu </p> 
						<p className="display-5 font-weight-bold text-light mx-3 my-0 ">My Interest: </p>
						<hr className="my-0 mx-3"/>
						<p className="display-5 font-weight-bold text-light mx-3 ">Motion Graphics | 2D animation | UI/UX | Front end development </p>
								
						
								</Col>
							
					</Row>

				</Container>

		{/*	</Jumbotron>   */}   
			</div>
		);
			}




				
		export default Hero;