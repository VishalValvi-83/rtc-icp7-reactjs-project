import React from "react";
import '../computer-services/c-services.css'

const Computerservices = ({url,text,header}) => {
    return (
        <>
            <div class="card" >
                <img src={url} class="card-img-top" alt="card-img" />
                <div class="card-body">
                <span className="header">{header}</span>

                    <p class="card-text">{text}</p>
                </div>
            </div>
        </>
    )
}
export default Computerservices
