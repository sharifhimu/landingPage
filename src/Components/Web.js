import React, { Component } from 'react';

import Projects from './projects';
import {Webproject} from './info';

class Web extends Component{

	render(){
			return(
			             <div >
			
					      

					
					      
			    
     		<h1 className="recent-project">Webproject</h1>
          
     				<div className="recent-grid">
     				  

     				<Projects referance={Webproject[0].referance} cardimg={Webproject[0].cardimg} name={Webproject[0].name} button={Webproject[0].button} />  
           			
           </div>
           </div>

);
}
	}


	export default Web;