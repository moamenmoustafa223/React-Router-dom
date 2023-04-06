import React,{Component} from "react";
import "./Home.css"
import avatar from "../../images/avataaars.svg";

export default class Home extends Component{
    render(){
        return(<>
    <section  className="  text-white text-center ">
        <div id="home" className=" py-5 vh-100  ">
            <div className="home-content  h-100 d-flex  justify-content-center align-items-center flex-column">
            <img src={avatar} className="w-25 mb-4" alt=""/>
        <h1 className=" text-uppercase mb-3 fs-1 fw-bold">Start React</h1>
        <div className="header-line d-flex  justify-content-center align-items-center mb-4 ">
                <div className="line-left"></div>
            <i className="fa-solid fs-2 fa-star  mx-3 " ></i>
            <div className="line-right"></div>
        </div>

        <p className=" mb-0 fs-3">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        

        </div>

    </section>

            </>
        )
    }
    
}