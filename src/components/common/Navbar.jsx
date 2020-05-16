import React from "react";
import { Link } from 'react-router-dom';
import { Layout, Badge, Avatar, Divider, Typography, Menu } from "antd";
import Auth from "../../auth/Auth";
import { LoginOutlined, NotificationOutlined, ShoppingCartOutlined, RiseOutlined } from '@ant-design/icons';
import { FcComboChart, FcAdvertising, FcCurrencyExchange,  } from "react-icons/fc";
const { Header } = Layout;
const { SubMenu } = Menu;


function Navbar(){
    return(
        <div style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" style={{marginLeft: 20}}/>
            <Menu mode="horizontal" style={{marginTop: 10}}>
                <Menu.Item key="login" icon={<LoginOutlined/>} style={{float: 'right', marginLeft: 20}}>
                    Login
                </Menu.Item>
                <Menu.Item key="cotacoes" 
                    icon={
                        <FcComboChart 
                            className="reactIcons" 
                            style={{fontSize: 20, marginRight: 5}}
                        />
                    } 
                    style={{float: 'right', marginLeft: 20}}>
                    Cotações
                </Menu.Item>
                <Menu.Item 
                    key="anunciar" 
                    icon={
                        <FcAdvertising 
                            className="reactIcons" 
                            style={{fontSize: 20, marginRight: 5}}
                        />
                    } 
                    style={{float: 'right', marginLeft: 30}}>
                    Anunciar
                </Menu.Item>
                <Menu.Item 
                    key="comprar" 
                    icon={
                        <FcCurrencyExchange
                        className="reactIcons" 
                        style={{fontSize: 20, marginRight: 5}}
                    />
                    } 
                    style={{float: 'right'}}>
                    Comprar
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar;