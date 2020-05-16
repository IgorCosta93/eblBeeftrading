import React from "react";
import { Spin, Row } from "antd";

function AntSpin(){
    return(
        <Row style={{ marginTop: "20%" }}>
            <Spin tip="Carregando..." style={{display: "block", margin: "auto"}} size="large" />
        </Row>
    )
}

export default AntSpin;