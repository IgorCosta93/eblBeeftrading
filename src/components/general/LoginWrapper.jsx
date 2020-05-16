import React from "react";
import Login from "./loginWrapper/Login";

export default function LoginWrapper({login, LOGIN_RESQUEST, history}){
    let props = {
        login,
        LOGIN_RESQUEST,
        history
    };

    return (
        <Login props={props}  />
    );
}