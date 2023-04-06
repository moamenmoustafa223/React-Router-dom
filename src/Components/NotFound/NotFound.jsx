import React,{Component} from "react";
import Notimg from "../../images/download.png";

export default class NotFound extends Component{
    render(){
        return(<>
   <section className="py-5 text-center">
    <div className="container py-5 ">
            <h1 className="text-danger">Page NotFound 404</h1>
            <img src={Notimg} className="img-fluid" alt="" />
    </div>

   </section>

            </>
        )
    }
    
}