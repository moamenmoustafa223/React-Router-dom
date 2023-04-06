import React,{Component} from "react";
import "./Portfolio.css"
import img1 from "../../images/cabin.png";
import img2 from "../../images/cake.png";
import img3 from "../../images/circus.png";
import img4 from "../../images/game.png";
import img5 from "../../images/safe.png";
import img6 from "../../images/submarine.png";


export default class Portfolio extends Component{
    render(){
        return(<>
  <section id="portfolio " className="text-center py-5">
    <div className="container py-5">
        <h1 className="fw-bold mb-4">PORTFOLIO</h1>
        <div className="header-line d-flex justify-content-center align-items-center mb-4 ">
                <div className="line-left bg-black"></div>
            <i className="fa-solid fs-2 fa-star  mx-3 " ></i>
            <div className="line-right bg-black"></div>
            </div>
        <div className="row g-4">
            <div className="col-lg-4 col-md-6">
                <div className="portfolio-card rounded-4 position-relative">
                    <img src={img1} className=" rounded-4 img-fluid" alt="" />

                        <div className="portfolio-layer position-absolute   d-flex justify-content-center align-items-center rounded-4 ">
                        <i class="fa-solid fs-1 text-white fa-plus"></i>
                            </div>            
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="portfolio-card rounded-4 position-relative">
                    <img src={img2} className=" rounded-4 img-fluid" alt="" />

                        <div className="portfolio-layer position-absolute   d-flex justify-content-center align-items-center rounded-4 ">
                        <i class="fa-solid fs-1 text-white fa-plus"></i>
                            </div>            
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="portfolio-card rounded-4 position-relative">
                    <img src={img3} className=" rounded-4 img-fluid" alt="" />

                        <div className="portfolio-layer position-absolute   d-flex justify-content-center align-items-center rounded-4 ">
                        <i class="fa-solid fs-1 text-white fa-plus"></i>
                            </div>            
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="portfolio-card rounded-4 position-relative">
                    <img src={img4} className=" rounded-4 img-fluid" alt="" />

                        <div className="portfolio-layer position-absolute  d-flex justify-content-center align-items-center rounded-4 ">
                        <i class="fa-solid fs-1 text-white fa-plus"></i>
                            </div>            
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="portfolio-card rounded-4 position-relative">
                    <img src={img5} className=" rounded-4 img-fluid" alt="" />

                        <div className="portfolio-layer position-absolute  d-flex justify-content-center align-items-center rounded-4 ">
                        <i class="fa-solid fs-1 text-white fa-plus"></i>
                            </div>            
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="portfolio-card rounded-4 position-relative">
                    <img src={img6} className=" rounded-4 img-fluid" alt="" />

                        <div className="portfolio-layer position-absolute  d-flex justify-content-center align-items-center rounded-4">
                        <i class="fa-solid fs-1 text-white fa-plus"></i>
                            </div>            
                </div>
            </div>

        </div>
    </div>

  </section>
            </>
        )
    }
    
}