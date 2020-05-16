import React, {Component} from 'react';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';

import {Navbar,Nav} from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';

import {Switch} from 'react-router-dom'; 

import './App.css';

import Footer from './Components/Footer';
import landingPage from './Components/landingPage';
import aboutPage from './Components/aboutPage';
import contactPage from './Components/contactPage';
// import portfolio from './Components/portfolio';
import Illustration from './Components/Illustration';
import Motion from './Components/Motion';
import Game from './Components/Game';
import Web from './Components/Web';
import Logo from './Components/Logo';

// import {Info} from './Components/info';
// import image from './Components/image';



class App extends Component{
  
  // constructor(props){
  //   super(props);
  //   this.state = {
  
  //     title: 'Himu',
      
  //     headerlinks: [
  //     {title: 'Home', path: '/'},
  //     {title: 'About', path: './about'},
  //     {title: 'Contact', path: './contact'} 
  //     ],

  //     Home: {
  //       title: 'Chittagong'
  //     },
  //     about: {
  //       title: 'About Me'
  //     },
  //     Contact: {
  //       title: 'Let\'s Talk'
  //     } 
  //   }
  // }

  render(){
    return(
      <Router>
   {/*  <Container className ="p-0 ml-auto" fluid={true}>    */}
        <Navbar className="border-bottom" bg="transparent" expand="lg">
             
             <Navbar.Brand className="logoname logoshadow" href="/">Himu </Navbar.Brand>   

      {/*      <Navbar.Brand href="/">
              <img
                src="./himu_logo.png"
                width="160"
                height="60"
                className="d-inline-block align-top logoshadow"
                alt="Himu"
              />
            </Navbar.Brand>    */}

         <Navbar.Toggle className=" navbtn" aria-controls="navbar-toggle" />
         <Navbar.Collapse id="navbar-toggle" className="">
            <Nav className="ml-auto navtoggle">
               <Link  className="  nav-hover navfont"  to="/">Home</Link>   
              <Link className="  nav-hover navfont" to="/aboutPage">About Me</Link>

        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">Portfolio</a>
          <div class="dropdown-content">
            <a href="/Illustration">Illustration</a>
            <a href="/Motion">Motion Graphics</a>
            <a href="/Logo">Logos</a>
            <a href="/Game">Game Projects</a>
            <a href="/Web">Web Projects</a>
          </div>
        </li>

         {/*     <Link className="  nav-hover navfont" to="/portfolio">My Portfolio</Link>
           <Link className="nav-link  nav-hover navfont" to="/portfolio">My Portfolio</Link>   */}
           
            </Nav>
        </Navbar.Collapse> 
        </Navbar>   

             

            <Switch>
           <Route exact path ="/" component= {landingPage} /> 
           <Route exact path ="/aboutPage" component= {aboutPage} />
      {/*     <Route exact path ="/portfolio" component= {portfolio} />  */}
           <Route exact path ="/contactPage" component= {contactPage} /> 
           <Route exact path ="/Illustration" component= {Illustration} /> 
            <Route exact path ="/Motion" component= {Motion} />
             <Route exact path ="/Game" component= {Game} />
              <Route exact path ="/Web" component= {Web} />
               <Route exact path ="/Logo" component= {Logo} />
       
            </Switch>
          

          
          

         <Footer />   

    {/* </Container>  */}
      </Router>

      )
  }
}
export default App;