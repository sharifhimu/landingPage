import React, { Component } from 'react';

import Projects from './projects';
import {Illustrationproject} from './info';

class Illustration extends Component{

	render(){
			return(
			             <div >
			
					      

					
					      
			    
     		<h1 className="recent-project">Illustration</h1>
          
     				<div className="recent-grid">
     				  

  {/*   				<Projects referance={Illustrationproject[0].referance} cardimg={Illustrationproject[0].cardimg} name={Illustrationproject[0].name} button={Illustrationproject[0].button} />  
           			<Projects referance={Illustrationproject[1].referance} cardimg={Illustrationproject[1].cardimg} name={Illustrationproject[1].name} button={Illustrationproject[1].button} />  
           			<Projects referance={Illustrationproject[2].referance} cardimg={Illustrationproject[2].cardimg} name={Illustrationproject[2].name} button={Illustrationproject[2].button} />  
           			<Projects referance={Illustrationproject[3].referance} cardimg={Illustrationproject[3].cardimg} name={Illustrationproject[3].name} button={Illustrationproject[3].button} />
           			<Projects referance={Illustrationproject[4].referance} cardimg={Illustrationproject[4].cardimg} name={Illustrationproject[4].name} button={Illustrationproject[4].button} />
           			<Projects referance={Illustrationproject[5].referance} cardimg={Illustrationproject[5].cardimg} name={Illustrationproject[5].name} button={Illustrationproject[5].button} />
           			<Projects referance={Illustrationproject[6].referance} cardimg={Illustrationproject[6].cardimg} name={Illustrationproject[6].name} button={Illustrationproject[6].button} />
           			<Projects referance={Illustrationproject[7].referance} cardimg={Illustrationproject[7].cardimg} name={Illustrationproject[7].name} button={Illustrationproject[7].button} />
           			<Projects referance={Illustrationproject[8].referance} cardimg={Illustrationproject[8].cardimg} name={Illustrationproject[8].name} button={Illustrationproject[8].button} />
     */}

     {Illustrationproject.map((project,i)=> <Projects referance={Illustrationproject[i].referance} cardimg={Illustrationproject[i].cardimg} name={Illustrationproject[i].name} button={Illustrationproject[i].button} />  
             )}      			
     					
           </div>
           </div>

);
}
	}


	export default Illustration;