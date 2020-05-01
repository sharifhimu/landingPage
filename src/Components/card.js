import React, {Component} from 'react';
import { Card,CardTitle,CardActions,CardText,Button} from 'react-mdl';


class card extends Component{
	render(){
		return(
			<div>
			 <h1 className="recent-project">Recent Projects</h1>
             <hr/>

             <div className="recent-grid">
                  {/*blotter effect motion*/}
          <Card shadow={0} style={{width: '512px', margin: 'auto',padding: '15px'}}>
          <a className="projects" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1x5Ofu385TacZVdGvQKhbDRjMd2WAAmHL">
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/86e53f94935093.5e8b5ae19f361.jpg) center / cover'}}>
               <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/86e53f94935093.5e8b5ae19f361.jpg" alt="Corona" style={{width: "0px"}} />
              </CardTitle>
              </a>
              <CardText>
                    <span style={{fontSize: '15px',fontWeight: 'bold'}}>Blotter effect Dance motion graphics</span>
              </CardText>
              <CardActions border>
               <a href="https://www.behance.net/gallery/94935093/Blotter-effect-motion-graphics">
                  <Button raised colored>View full video</Button>
                </a>
              </CardActions>
              </Card> 


              {/*corona sun illustration*/}
					<Card  shadow={0} style={{width: '512px', margin: 'auto',padding: '10px'}}  >
						<a className="projects" target="_blank" rel="noopener noreferrer" href="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f071e394816097.5e8823af88d01.png">
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f071e394816097.5e8823af88d01.png) center / cover'}}>
					    
							  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f071e394816097.5e8823af88d01.png" alt="Corona" style={{width: "0px"}} />
						 </CardTitle>
						</a>
					   
					    <CardText>
					       <span style={{fontSize: '15px',fontWeight: 'bold'}}>Corona Sun & Earth Illustration</span>
					    </CardText>
					    <CardActions border>
					     <a href="https://www.behance.net/gallery/94816097/Covid19-corona-virus-earth-illustration">
					        
					        <Button raised colored>View on Behance</Button>

					    	</a>
					    </CardActions>
					   	</Card>		
					   	</div>
					   	</div>

			);
	}
}


export default card;