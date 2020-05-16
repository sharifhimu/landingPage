import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';

const Footer = () => {
	return(
	<footer >
		<Container fluid={true} >  
			<Row  className="border-top  justify-content-center my-5" >
				<Col  md={3} sm={8} >
					<p className="display-4  text-center border-bottom border-dark contact-border-width my-3">Contact me </p>
				<div className="social-link" >	
					<a href="https://www.behance.net/sharifsoroc64d" rel="noopener noreferrer" target="_blank">
					<i class="fa fa-behance-square" aria-hidden="true" />
					</a>

					<a href="https://www.linkedin.com/in/sharif-himu-b9753b1a1/" rel="noopener noreferrer" target="_blank">
					<i class="fa fa-linkedin-square" aria-hidden="true" />
					</a>

					<a href="https://www.facebook.com/sharif.sorot" rel="noopener noreferrer" target="_blank">
					<i class="fa fa-facebook-square" aria-hidden="true" />
					</a>

					<a href="https://join.skype.com/invite/x52fLYWXq9bv" rel="noopener noreferrer" target="_blank">
					<i class="fa fa-skype" aria-hidden="true" />
					</a>

				</div>		

				</Col>
			</Row>
		</Container>  
	</footer>
);
}

export default Footer;








