import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Layout, Menu, Avatar } from 'antd';
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import Auth from "../../auth/Auth";
import routes from "../../const/routes";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Sidebar(){
    let [ collapsed, setCollapsed ] = useState(true);

    function onCollapse(){
        setCollapsed(collapsed = !collapsed);
    }

    return(
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" mode="inline">
                <Menu.Item key="0">
                    <Link to={routes.HOME}>
                        <AiFillHome/>
                        <span>Inicio</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="1" onClick={() => {Auth.logout(() => {return null})}} >
                    <Link to={routes.LOGIN}><AiOutlineLogout/><span>Sair</span></Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar;