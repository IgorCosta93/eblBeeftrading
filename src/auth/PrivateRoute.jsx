import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { Layout, PageHeader, Breadcrumb } from "antd";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import Auth from "./Auth";
const { Content } = Layout;

export const PrivateRoute = ({
    component: Component,
    breadcrumb: Breadcrumbs,
    breadcrumbSub: BreadcrumbSub,
    pathB: Path,
    icon: Icon,
    ...rest
}) => {
    return(
        <Route
            {...rest}
            render={props => {
                if (Auth.isAuthenticated()){
                    return (
                        <Layout style={{ minHeight: '100vh' }}>
                            {/*<Sidebar/>*/}
                            <Layout>
                                <Navbar/>
                                
                                <Breadcrumb style={{ marginLeft: 45, marginTop: 80 }}>
                                    { Path ? 
                                            <Breadcrumb.Item>
                                                <Icon style={{marginRight: 10, fontSize: 15}}/>
                                                <span>
                                                    <Link to={Path}>
                                                        {Breadcrumbs}
                                                    </Link>
                                                </span>
                                            </Breadcrumb.Item>
                                        : 
                                            <Breadcrumb.Item>
                                                <Icon style={{marginRight: 10, fontSize: 15}}/>
                                                <span>
                                                    {Breadcrumbs}
                                                </span>
                                            </Breadcrumb.Item>
                                    }
                                    
                                    { BreadcrumbSub ? <Breadcrumb.Item><span>{BreadcrumbSub}</span></Breadcrumb.Item> : null }
                                </Breadcrumb>
                                
                                <Content 
                                    style={{
                                        //background: '#fff', 
                                        padding: 24, 
                                        marginTop:0,
                                        marginRight: 20, 
                                        marginLeft: 20, 
                                        marginBottom: 20, 
                                        minHeight: "auto" 
                                    }}
                                >
                                    <Component {...props}/>
                                </Content>
                            </Layout>
                        </Layout>
                    );
                }else{
                    return(
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    )
                } 
            }}
        />
    )
}