import React from "react";
import '../computer-services/c-services.css'

const Computerservices = ({url,text,header}) => {
    return (
        <>
            <div class="card border border-0" >
                <img src={url} class="card-img-top" alt="card-img" />
                <div class="card-body">
                <span className="header">{header}</span>

                    <p class="card-text mb-4">{text}</p>
                </div>
            </div>
        </>
    )
}
export default Computerservices
