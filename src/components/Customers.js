import React from "react";

export default function Customers(){
    return(
        <div className="customers--container">
        <h1> Customers Page</h1>
        <img src={require('./images/logo.png')} alt="comming soon logo" />
        <a href="/Product"> Back to Products</a>
        </div>
    )
}