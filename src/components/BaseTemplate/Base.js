import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Base = (props) =>{
    return(
        <div className="super_container">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Base