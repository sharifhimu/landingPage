import React, { Component } from 'react';

import Projects from './projects';
import {Logoproject} from './info';

class Logo extends Component{

	render(){
			return(
			             <div >
			
					      

					
					      
			    
     		<h1 className="recent-project">Logos</h1>
          
     				<div className="recent-grid">
     				  

     				<Projects referance={Logoproject[0].referance} cardimg={Logoproject[0].cardimg} name={Logoproject[0].name} button={Logoproject[0].button} />  
           			<Projects referance={Logoproject[1].referance} cardimg={Logoproject[1].cardimg} name={Logoproject[1].name} button={Logoproject[1].button} />  
     				<Projects referance={Logoproject[2].referance} cardimg={Logoproject[2].cardimg} name={Logoproject[2].name} button={Logoproject[2].button} />
     				<Projects referance={Logoproject[3].referance} cardimg={Logoproject[3].cardimg} name={Logoproject[3].name} button={Logoproject[3].button} />
     				<Projects referance={Logoproject[4].referance} cardimg={Logoproject[4].cardimg} name={Logoproject[4].name} button={Logoproject[4].button} />
     				<Projects referance={Logoproject[5].referance} cardimg={Logoproject[5].cardimg} name={Logoproject[5].name} button={Logoproject[5].button} />
     				<Projects referance={Logoproject[6].referance} cardimg={Logoproject[6].cardimg} name={Logoproject[6].name} button={Logoproject[6].button} />
     				<Projects referance={Logoproject[7].referance} cardimg={Logoproject[7].cardimg} name={Logoproject[7].name} button={Logoproject[7].button} />
     				<Projects referance={Logoproject[8].referance} cardimg={Logoproject[8].cardimg} name={Logoproject[8].name} button={Logoproject[8].button} />  
     					
           </div>
           </div>

);
}
	}


	export default Logo;