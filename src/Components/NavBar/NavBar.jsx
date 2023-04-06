import React,{Component} from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
export default class NavBar extends Component{
    render(){
        return(<>
<nav className="navbar navbar-expand-lg  text-white">
  <div className="container">
    <Link to="" className="navbar-brand fw-bold text-white fs-2">START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="portfolio" className="nav-link text-white fw-bold fs-5 active" >PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link  to="about"className="nav-link text-white fw-bold fs-5" >ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to="contact" className="nav-link text-white fw-bold fs-5" >CONTACT</Link>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>

            </>
        )
    }
    
}