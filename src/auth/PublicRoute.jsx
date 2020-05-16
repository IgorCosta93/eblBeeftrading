import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";
//import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
//import Auth from "./Auth";
const { Content } = Layout;

export const PublicRoute = ({
    component: Component,
    breadcrumb: Breadcrumbs,
    breadcrumbSub: BreadcrumbSub,
    pathB: Path,
    ...rest
}) => {
    return(
        <Route
            {...rest}
            render={props => {
                //Auth.isAuthenticated();
                return (
                    <Layout style={{ minHeight: '100vh' }}>
                        <Layout>
                            <Navbar/>
                            <Content 
                                className="publicContent"
                                style={{
                                    //background: '#f7e8ee', 
                                    background: '#fff', 
                                    padding: 0, 
                                    //marginTop: 60,
                                    minHeight: "auto" 
                                }}
                            >
                                <Component {...props}/>
                            </Content>
                        </Layout>
                        {/*<Footer/>*/}
                    </Layout>
                );
            }}
        />
    )
}