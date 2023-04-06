import React,{Component} from "react";
import "./Footer.css"

export default class Footer extends Component{
    render(){
        return(<>
    <footer className="text-white py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4">
                    <h3 className="mb-4 fw-bold">LOCATION</h3>
                    <h5 className="fw-normal">2215 John Daniel Drive<br/>Clark, MO 65243</h5>
                </div>
                <div className="col-md-4">
                    <h3 className="mb-4 fw-bold">AROUND THE WEB</h3>
                    <div className="icons d-flex">
                    <div className="icon me-3  rounded-circle border  border-3 d-flex justify-content-center align-items-center">
                    <i class="fa-brands fa-facebook-f"></i>

                    </div>
                    <div className="icon  me-3 rounded-circle border  border-3 d-flex justify-content-center align-items-center">
                    <i class="fa-brands fa-twitter"></i>

                    </div>
                    <div className="icon me-3  rounded-circle border  border-3 d-flex justify-content-center align-items-center">
                    <i class="fa-brands fa-linkedin-in"></i>

                    </div>
                    <div className="icon me-3 rounded-circle border  border-3 d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-basketball"></i>

                    </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <h3 className="mb-4 fw-bold">ABOUT FREELANCER</h3>
                    <h5  className="fw-normal">Freelance is a free to use, MIT licensed Bootstrap theme created by Route</h5>
                </div>
            </div>

        </div>
    </footer>
    <div className="footer  py-3 text-center text-white">
        <p className="fw-bold m-0">Copyright © Your Website 2021</p>

    </div>

            </>
        )
    }
    
}