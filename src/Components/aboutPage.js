import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const aboutPage = () => {
	return(
    
			<Container >
				<Row >
					<Col className="about_img" xs={11} md={12}>
						<img className = "thumbnail "src="./thumbnail_image.jpg" alt="thumbnail" />
						<p>
							Hi there, <br />
							I am a Computer engineer. My Bsc
							exam is completed and I am looking
							for an opportunity to express myself in
							a challaging environment. My motto:
							"Whatever you do, work at it with all
							your heart ". <br/>
							EXPERT IN THESE SKILLS: <br/>
							:: 2D graphics <br/>
							:: 2D animation <br/>
							:: 3D model design <br/>
							:: UI/UX  <br/>
							:: Motion graphics <br/>


							</p>

							<h3>
								My Education
							</h3>
							<p>
								University of Chittagong. <br/>
								Subject : Computer science & Engineering. <br/>
								Session : 2015-16. <br/>
								Last semester Result : Passed	<br/>
							</p>

							<h3>
								Work Experience
							</h3>


								<h4>junior game developer(internship) </h4>
							<p>	Agamilabs Limited, Chittagong University 
								Having Experience of working with a team of Game developing
								sector.
								Job responsibilities: Game material and UI/UX design, Game development.
								Duration: 01 Dec,2018 - 30 may,2019 </p>
							<p> Certificate:https://drive.google.com/open?id=1biNs2fp1CRUGkVoIKRxe6IYzJ-xpe3n5 </p> 
								
								<a href="https://drive.google.com/open?id=1biNs2fp1CRUGkVoIKRxe6IYzJ-xpe3n5" > View Certificate </a>
										
							<h3>
							Skills
							</h3>
							
							<img className= "skill_img" src="skills.PNG" alt="Skills" />

							<h3>
							Career Objectives
							</h3>

							<p>
								To become a better Front end developer and animator using my
								full potentiality.And to contribute the company using my best
								skill .
							</p>

					</Col>
				</Row>
			</Container>

		);
}

export default aboutPage;