import React from "react";
import Home from "./homeWrapper/Home";

export default function HomeWrapper({data, brand, GET_FOLLOWUP, GET_BRAND}){
    let props = {
        data,
        brand,
        GET_FOLLOWUP,
        GET_BRAND
    };

    return <Home props={props}/>
}