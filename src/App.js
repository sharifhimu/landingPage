import React, {Component} from 'react';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {Switch} from 'react-router-dom'; 

import './App.css';

import Footer from './Components/Footer';
import landingPage from './Components/landingPage';
import aboutPage from './Components/aboutPage';
import contactPage from './Components/contactPage';
import portfolio from './Components/portfolio';

// import image from './Components/image';




class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
  
      title: 'Himu',
      
      headerlinks: [
      {title: 'Home', path: '/'},
      {title: 'About', path: './about'},
      {title: 'Contact', path: './contact'} 
      ],

      Home: {
        title: 'Chittagong'
      },
      about: {
        title: 'About Me'
      },
      Contact: {
        title: 'Let\'s Talk'
      } 
    }
  }

  render(){
    return(
      <Router>
   {/*  <Container className ="p-0 ml-auto" fluid={true}>    */}
        <Navbar className="border-bottom" bg="transparent" expand="lg">
             
             <Navbar.Brand href="">
              <img
                src="./himu_logo.png"
                width="160"
                height="60"
                className="d-inline-block align-top"
                alt="Himu"
              />
            </Navbar.Brand>

         <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
         <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link font-weight-bold nav-hover" to="/">Home</Link>
              <Link className="nav-link font-weight-bold nav-hover" to="/aboutPage">About Me</Link>
              <Link className="nav-link font-weight-bold nav-hover" to="/portfolio">My Portfolio</Link>
            
            </Nav>
        </Navbar.Collapse> 
        </Navbar>   

             

            <Switch>
           <Route exact path ="/" component= {landingPage} /> 
           <Route exact path ="/aboutPage" component= {aboutPage} />
           <Route exact path ="/portfolio" component= {portfolio} />
           <Route exact path ="/contactPage" component= {contactPage} /> 
            </Switch>
          


           

           <Footer /> 

    {/* </Container>  */}
      </Router>

      )
  }
}
export default App;