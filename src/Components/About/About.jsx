import React,{Component} from "react";
import "./About.css"

export default class About extends Component{
    render(){
        return(<>
        <section id="about" className="py-5  text-center text-white ">
            <div className="container w-50 py-5">
            <h1 className="fw-bold mb-4">ABOUT</h1>
            <div className="header-line d-flex justify-content-center align-items-center mb-4 ">
                <div className="line-left"></div>
            <i className="fa-solid fs-2 fa-star  mx-3 " ></i>
            <div className="line-right"></div>
            </div>
        
        <div className="row g-3">
            <div className="col-md-6 text-start">
<p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6 text-start">
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
        </div>

            </div>
        </section>

            </>
        )
    }
    
}
