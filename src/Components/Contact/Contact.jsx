import React,{Component} from "react";
import "./Contact.css"

export default class Contact extends Component{
    render(){
        return(<>
   
   <section id="contact" className="py-5">
    <div className="container py-5 w-75 ">
        <div className="header text-center">
        <h1 className="fw-bold mb-4">CONTACT ME</h1>
        <div className="header-line d-flex justify-content-center align-items-center mb-4 ">
                <div className="line-left bg-black"></div>
            <i className="fa-solid fs-2 fa-star  mx-3 " ></i>
            <div className="line-right bg-black"></div>
            </div>
        </div>
 

        <input className="form-control form-control-lg border-0 mb-4" type="text" placeholder="Name"  />
        <hr></hr>
        <input className="form-control form-control-lg border-0 mb-4" type="email" placeholder="Email Address"  />
        <hr></hr>
        <input className="form-control form-control-lg border-0 mb-4" type="phone" placeholder="Phone Number"  />
        <hr></hr>
        <textarea className="form-control  form-control-lg border-0" id="exampleFormControlTextarea1 " placeholder="Message" rows="3"></textarea>
        <hr></hr>

        <button type="button" className="btn btn-custome text-start py-3 px-4 fs-5">Send</button>

    </div>
   </section>

            </>
        )
    }
    
}