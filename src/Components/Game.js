import React, { Component } from 'react';

import Projects from './projects';
import {Gameproject} from './info';

class Game extends Component{

	render(){
			return(
			             <div >
			
					      

					
					      
			    
     		<h1 className="recent-project">Gaming Projects</h1>
          
     				<div className="recent-grid">
     				  

     				<Projects referance={Gameproject[0].referance} cardimg={Gameproject[0].cardimg} name={Gameproject[0].name} button={Gameproject[0].button} />  
           			<Projects referance={Gameproject[1].referance} cardimg={Gameproject[1].cardimg} name={Gameproject[1].name} button={Gameproject[1].button} />  
     				 
     					
           </div>
           </div>

);
}
	}


	export default Game;