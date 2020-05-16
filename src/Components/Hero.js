import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Typical from 'react-typical';

const Hero =() => {
	return(

			<div className="hero-image" xs={12} sm={12}>
	{/*	 <Jumbotron className="bg-transparent Jumbotron-fluid p-0  ">  */}
					
				<Container fluid={true}>
					
					<Row className="py-5 justify-content-center ">
						<Col sm={true} md={true} xs={12} lg={true} p-0 >
								
								
						{/*	<p className="display-5 font-weight-bold text-light mx-3 my-0 ">Hi There </p>  */}
							
						<p className="   pb-2 pt-5 text1 my-0">This is Sharif Himu   </p>
						<hr className=" text1 my-1"/>
			{/*			    <p className=" text-light pt-2 text2 pb-3  my-0">My Interest: </p>  
						<hr className=" pt-0"/> */}
						<p className="  text-light pb-5 pt-1  my-1 text3 ">I'm a {' '}

																		<Typical
																		loop={Infinity}
																		wrapper="b"
																		steps={[
																			'Motion designer',
																			2000,
																			'2D animator',
																			2000,
																			'Front-End developer',
																			2000]
																		}
																		/>

																		</p>
								
						
								</Col>
							
					</Row>

				</Container>

		{/*	</Jumbotron>   */}   
			</div>
		);
			}




				
		export default Hero;