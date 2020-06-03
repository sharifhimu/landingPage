import React, { Component } from 'react';

import Projects from './projects';
import {Webproject} from './info';

class Web extends Component{

	render(){
			return(
			             <div >
			
					      

					
					      
			    
     		<h1 className="recent-project">Webproject</h1>
          
     				<div className="recent-grid">
     				  
     		{/*		<Projects referance={Webproject[0].referance} cardimg={Webproject[0].cardimg} name={Webproject[0].name} button={Webproject[0].button} />  
           			
     				<Projects referance={Webproject[1].referance} cardimg={Webproject[1].cardimg} name={Webproject[1].name} button={Webproject[1].button} />  
           			<Projects referance={Webproject[2].referance} cardimg={Webproject[2].cardimg} name={Webproject[2].name} button={Webproject[2].button} />  
           	*/}


        {Webproject.map((project,i)=> <Projects referance={Webproject[i].referance} cardimg={Webproject[i].cardimg} name={Webproject[i].name} button={Webproject[i].button} />   
             )}  

           </div>
           </div>

);
}
	}


	export default Web;