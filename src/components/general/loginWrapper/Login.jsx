import React, { useState, useEffect } from "react";
import { Alert, Card, Form, Input, Button, Row } from 'antd';
import Auth from "../../../auth/Auth";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { openNotificationWithIcon } from "../../common/Notification";
import routes from "../../../const/routes";

const userMessage = "Por favor preencha o campo usuario.";
const passwordMessage = "Por favor preencha o campo senha.";

function Login({props}){
    let [ user, setUser ] = useState({
        username: "",
        password: "",
        statusPassword: "",
        messagePassword: "",
        messageUser: "",
        statusUser: ""
    });
    let [ loading, setLoading ] = useState(false);
   
    useEffect(() => {
        if(user.username === undefined || user.username === "") return;
        if(props.login.loading) return 
       
        Auth.login(props.login,(res) => {
            if(res === "SUCCESS"){
                setLoading(loading = true);
                setTimeout(() => {
                    setUser(user = {
                        username: "",
                        password: "",
                    })
                    props.history.push(routes.HOME)
                    setLoading(loading = false);
                },3000)
                openNotificationWithIcon('success', "Sucesso", "Bem vindo!", "", 4);
            }else if(res === "ERROR"){
                openNotificationWithIcon(
                    'error', "Erro", 
                    "Usuario ou senha invalidos.", "", 5
                );
            }
        });
    }, [props.login])

    function updateUsername(evt){
        if(evt.target.value === ""){
            setUser(user = {...user, 
                username: evt.target.value,
                statusUser: "error",
                messageUser: userMessage
            });
        }else{
            setUser(user = {...user, 
                username: evt.target.value,
                statusUser: "success",
                messageUser: ""
            });
        }
    }

    function updatePassword(evt){
        if(evt.target.value === ""){
            setUser(user = {...user, 
                password: evt.target.value,
                statusPassword: "error",
                messagePassword: passwordMessage
            });
        }else{
            setUser(user = {...user, 
                password: evt.target.value,
                statusPassword: "success",
                messagePassword: ""
            });
        }
    }

    function login(){
        if(user.username === "") setUser(user = {...user, statusUser: "error", messageUser: userMessage}) ;
        if(user.password === "") setUser(user = {...user, statusPassword: "error", messagePassword: passwordMessage}) ;
        if(user.username === "" || user.password === "") return null;

        const data = {
            email: user.username,
            password: user.password 
        };
        props.LOGIN_RESQUEST(data);
    }

    function keyCode(evt){
        if(evt.keyCode === 13) login() 
    }

    return(
        <header className="v-header container">
            <div className="fullscreen-video-wrap">
                <video src="Forest.mp4" autoPlay={true} loop={true} preload={"auto"}/>
            </div>
            <div className="header-overlay"></div>
            <div className="App-header">
                <Card 
                    style={{ width: 400, height: 410, borderRadius: 45 }}
                    cover={
                        <img 
                            src={require("../../../img/logo.jpg")} 
                            style={{ 
                                borderRadius: "20px", 
                                marginTop: 30, 
                                width: "80%", 
                                display: "block", 
                                marginLeft: "auto", 
                                marginRight: "auto"
                            }} 
                            alt="Logo" 
                        />
                    }
                    className="cardLogin"
                >
                    <Form 
                        className="login-form"
                        style={{marginTop: -22}}
                    >
                        <Form.Item
                            validateStatus={user.statusUser}
                            help={user.messageUser}
                            hasFeedback
                        >
                            <Input 
                                onChange={(e) => updateUsername(e)} 
                                prefix={<AiOutlineUser style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                placeholder="Usuario" 
                            />
                        </Form.Item>

                        <Form.Item
                            validateStatus={user.statusPassword}
                            help={user.messagePassword}
                            hasFeedback
                        >
                            <Input.Password 
                                onChange={(e) => updatePassword(e)} 
                                onKeyDown={(e) => keyCode(e)}
                                prefix={<AiFillLock style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                placeholder="Senha" 
                            />
                        </Form.Item>
                    </Form>

                    <Form.Item>
                        <Row>
                            <Button 
                                style={{ width: "100%" }} 
                                loading={props.login.loading} 
                                onClick={() => login()} 
                                type="primary" 
                                htmlType="submit"
                                className="login-form-button"
                            >
                                Continuar
                            </Button>
                        </Row>
                    </Form.Item>   
                </Card>   
            </div>
        </header>
    )
}

export default Login;