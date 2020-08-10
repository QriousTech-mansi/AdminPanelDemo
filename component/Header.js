import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




class Header extends React.Component{
    constructor(){
        super();
        this.state ={
            showMe : false
        }
    }
    clickHandler = (e) =>{
        this.setState ({
            showMe: !this.state.showMe
        })
    }
    render(){
        return (
            <div> 
            
                 {/* Header starts */}

            <div className="header">

                  <h5 className="heading">DRIXO</h5>
             </div>
             <input type="checkbox" id="toggle"/>
             <label for="toggle" className="toggleIcon">
                 <div className="spinner top"></div>
                 <div className="spinner middle"></div>
                 <div className="spinner bottom"></div>
              </label>
    
                 {/* Header Ends */}

                  {/* Sidebar */}
              <div className="sidebarMenu">
                   <ul className="menu">
                      <li><a href="#" className="main-heading">Main</a></li>
      
                      <li><Link to="dashboard">Dashboard</Link></li>
                      <li onClick={this.clickHandler}><Link to="dashboard"> Elements</Link></li>

                        <div style={({display: this.state.showMe ? 'block' : 'none', transition:"ease-in-out",})}>
                          <ul className="subHeading">
                              <li><a href="#">HTML</a></li>
                              <li><a href="#">CSS</a></li>
                              <li><a href="#">JavaScript</a></li>
                              <li><a href="#">About Us</a></li>
                          </ul>
                        </div>
      
                      <li onClick={this.clickHandler}><Link to='dummy'>Advanced UI</Link></li>

                      <div style={({display: this.state.showMe ? 'block' : 'none', transition:"ease-in-out",})}>

                           <ul className="subHeading">
                              <li><a href="#">HTML</a></li>
                              <li><a href="#">CSS</a></li>
                              <li><a href="#">JavaScript</a></li>
                              <li><a href="#">About Us</a></li>
                          </ul>
                          </div>
    
                      <li><Link to='dashboard'>Forms</Link></li>

                      <li><a href="#">Charts</a></li>
                      <li><a href="#">Tables</a></li>
      
                      <li><a href="#" className="main-heading">Extra</a></li>
      
                      <li><a href="#">Maps</a></li>
                      <li><a href="#">Icons</a></li>
                      <li><a href="#">Calendar</a></li>
                      <li><a href="#">Pages</a></li>
                      <li><a href="#">Extras</a></li>
                 </ul>
            </div>

      
      
             </div>
          );
        }
    
    }

  
  
    export default Header;


    
  