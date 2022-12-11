import React from "react";

export default function Orders(){
    return(
        <div className="orders--container">
            <h1> Orders Page</h1>
            <img src={require('./images/logo.png')} alt="comming soon logo" />
            <a href="/Product"> Back to Products</a>
        </div>
    )
}