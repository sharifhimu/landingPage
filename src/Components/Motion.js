import React, { Component } from 'react';

import Projects from './projects';
import {Motionproject} from './info';

class Motion extends Component{

	render(){
			return(
			             <div >
			
					      

					
					      
			    
     		<h1 className="recent-project">Motion Graphics</h1>
          
     				<div className="recent-grid">
     				  

     				<Projects referance={Motionproject[0].referance} cardimg={Motionproject[0].cardimg} name={Motionproject[0].name} button={Motionproject[0].button} />  
           			<Projects referance={Motionproject[1].referance} cardimg={Motionproject[1].cardimg} name={Motionproject[1].name} button={Motionproject[1].button} />  
     				<Projects referance={Motionproject[2].referance} cardimg={Motionproject[2].cardimg} name={Motionproject[2].name} button={Motionproject[2].button} /> 
     				<Projects referance={Motionproject[3].referance} cardimg={Motionproject[3].cardimg} name={Motionproject[3].name} button={Motionproject[3].button} />  
     				<Projects referance={Motionproject[4].referance} cardimg={Motionproject[4].cardimg} name={Motionproject[4].name} button={Motionproject[4].button} />   
     				<Projects referance={Motionproject[5].referance} cardimg={Motionproject[5].cardimg} name={Motionproject[5].name} button={Motionproject[5].button} />   
            	
           </div>
           </div>

);
}
	}


	export default Motion;