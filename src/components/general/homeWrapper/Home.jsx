import React, { useState, useEffect, Fragment } from "react";
import { Layout, Card, Typography, Row, Button, Select, Divider, Col, Carousel, Tag } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined, HeartOutlined } from "@ant-design/icons";
import { MdLocationOn } from "react-icons/md";
import { FaThList, FaStarHalfAlt, FaMapMarkedAlt, FaWeightHanging, FaCalendarAlt } from "react-icons/fa";
import { GiCow } from "react-icons/gi";
import {  } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Option } = Select;
const gridStyle = {
    width: '50%'
};
const uf = ["MT", "SP", "BA", "PR", "RS"];
const cities = ["Agua Boa", "Sorocaba", "Indaiatuba", "São Paulo", "Guaruja"];
const classifications = ["Touro", "Bezerro", "Boi", "Vaca"];
const breeds = ["Aberdeen Angus", "Nelore", "Senepol", "Girolando", "Guzerá"];
const categories = ["Gado de Leite", "Gado de Corte"];
  
function Home({props}){
    return(
        <div style={{marginTop: 150, textAlign: "center", paddingRight: "15%", paddingLeft: "15%"}}>
           <Typography>
                <Title level={2}>Lorem Ipsum is simply dummy text</Title>
                <p style={{fontSize: 25}}>It is a long established fact that a</p>
            </Typography>
            
            <Row style={{marginTop: 50}}>
                <Card style={{ width: 1100 }}>

                    <Card.Grid hoverable={false} style={{width: '35%'}}>
                        <p style={{textAlign: "left", marginLeft: -5, marginTop: -15, fontFamily: "arial", color: "#adabab"}}>
                            <MdLocationOn style={{color: "#adabab", marginRight: 10}}/>Estado
                        </p>
                        <Select
                            style={{ width: '100%', marginBottom: -30 }}
                            placeholder="Selecione o Estado"
                            //onChange={handleChange}
                            bordered={false}
                        >
                            {uf.map(u => {
                                return <Option key={u}>{u}</Option>
                            })}
                        </Select>
                    </Card.Grid>
                    
                    <Card.Grid hoverable={false} style={{width: '65%'}}>
                        <p style={{textAlign: "left", marginLeft: -5, marginTop: -15, fontFamily: "arial", color: "#adabab"}}>
                            <FaMapMarkedAlt style={{color: "#adabab", marginRight: 10}}/>Cidade
                        </p>
                        <Select
                            style={{ width: '100%', paddingTop: -20, marginBottom: -15 }}
                            placeholder="Selecione a cidade"
                            //onChange={handleChange}
                            bordered={false}
                        >
                            {cities.map(city => {
                                return <Option key={city}>{city}</Option>
                            })}
                        </Select>
                    </Card.Grid>

                    <Card.Grid hoverable={false} style={{width: '33%'}}>
                        <p style={{textAlign: "left", marginLeft: -5, marginTop: -15, fontFamily: "arial", color: "#adabab"}}>
                            <FaStarHalfAlt style={{color: "#adabab", marginRight: 10}}/>Classificação
                        </p>
                        <Select
                            style={{ width: '100%', marginBottom: -30 }}
                            placeholder="Selecione uma Classificação"
                            //onChange={handleChange}
                            bordered={false}
                        >
                            {classifications.map(classification => {
                                return <Option key={classification}>{classification}</Option>
                            })}
                        </Select>
                    </Card.Grid>

                    <Card.Grid hoverable={false} style={{width: '33%'}}>
                        <p style={{textAlign: "left", marginLeft: -5, marginTop: -15, fontFamily: "arial", color: "#adabab"}}>
                            <GiCow style={{color: "#adabab", marginRight: 10}}/>Raça
                        </p>
                        <Select
                            style={{ width: '100%', marginBottom: -30 }}
                            placeholder="Selecione uma Raça"
                            //onChange={handleChange}
                            bordered={false}
                        >
                            {breeds.map(breed => {
                                return <Option key={breed}>{breed}</Option>
                            })}
                        </Select>
                    </Card.Grid>
                   
                    <Card.Grid hoverable={false} style={{width: '34%'}}>
                        <p style={{textAlign: "left", marginLeft: -5, marginTop: -15, fontFamily: "arial", color: "#adabab"}}>
                            <FaThList style={{color: "#adabab", marginRight: 10}}/>Categoria
                        </p>
                        <Select
                            style={{ width: '100%', marginBottom: -30 }}
                            placeholder="Selecione uma Categoria"
                            //onChange={handleChange}
                            bordered={false}
                        >
                            {categories.map(category => {
                                return <Option key={category}>{category}</Option>
                            })}
                        </Select>
                    </Card.Grid>
                </Card>
            </Row>

            <Row style={{marginTop: 100}}>
                <Button icon={<SearchOutlined />} type="primary" block>
                    Pesquisar
                </Button>
            </Row>

            <Divider style={{marginTop: 140}}/>

            <Row style={{paddingBottom: 100}}>
                
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <Card
                        style={{ width: 250 }}
                        cover={
                            <Carousel>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow1.jpg')}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow2.jpg')}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow3.jpg')}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow4.jpg')}
                                    />
                                </div>
                            </Carousel>
                        }
                        actions={[
                            <HeartOutlined key="like"/>,
                            <DeleteOutlined key="edit" />,
                        ]}
                    >
                        <Row>
                            <Col span={16}>
                                <p style={{textAlign: "left", marginLeft: -5, fontFamily: "arial", color: "#adabab"}}>
                                    Bezerro
                                </p>
                            </Col>
                            <Col span={8}>
                                <Tag color="#337715" style={{marginTop: -15}}>RECENTE</Tag>
                            </Col>
                        </Row>
                        <Row>
                            <p style={{textAlign: "left", marginLeft: -5, fontFamily: "arial", fontWeight: "bold"}}>
                                Aberdeen Angus
                            </p>
                        </Row>
                        <Row style={{marginTop: -15}}>
                            <p style={{textAlign: "left", marginLeft: -5, fontFamily: "arial"}}>
                                Agua Boa / MT
                            </p>
                        </Row>

                        <Row>
                            <Col span={12}>
                                <p style={{textAlign: "left", fontFamily: "arial", color: "#adabab"}}>
                                    <FaWeightHanging style={{color: "#adabab", marginRight: 10}}/> 330 KG
                                </p>
                            </Col>
                            <Col span={12}>
                                <p style={{textAlign: "right", fontFamily: "arial", color: "#adabab"}}>
                                    <FaCalendarAlt style={{color: "#adabab", marginRight: 10}}/> 6 Meses
                                </p>                       
                            </Col>
                        </Row>

                        <Row>
                            <p 
                                style={{
                                    textAlign: "left", 
                                    marginLeft: -5, 
                                    marginBottom: -15, 
                                    fontFamily: "arial", 
                                    fontSize: 20, 
                                    fontWeight: "bold", 
                                    color:"#337715"
                                }}>
                                R$ 2.500,00
                            </p>
                        </Row>
                    </Card>
                </Col>

                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <Card
                        style={{ width: 250 }}
                        cover={
                            <Carousel>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow5.jpg')}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow6.jpg')}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow7.jpg')}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow8.jpg')}
                                    />
                                </div>
                            </Carousel>
                        }
                        actions={[
                            <HeartOutlined key="like"/>,
                            <DeleteOutlined key="edit" />,
                        ]}
                    >
                        <Row>
                            <Col span={16}>
                                <p style={{textAlign: "left", marginLeft: -5, fontFamily: "arial", color: "#adabab"}}>
                                    Vaca
                                </p>
                            </Col>
                            <Col span={8}>
                                {/*<Tag color="#337715" style={{marginTop: -15}}>RECENTE</Tag>*/}
                            </Col>
                        </Row>
                        <Row>
                            <p style={{textAlign: "left", marginLeft: -5, fontFamily: "arial", fontWeight: "bold"}}>
                                Nelore
                            </p>
                        </Row>
                        <Row style={{marginTop: -15}}>
                            <p style={{textAlign: "left", marginLeft: -5, fontFamily: "arial"}}>
                                Indaiatuba / SP
                            </p>
                        </Row>

                        <Row>
                            <Col span={12}>
                                <p style={{textAlign: "left", fontFamily: "arial", color: "#adabab"}}>
                                    <FaWeightHanging style={{color: "#adabab", marginRight: 10}}/> 420 KG
                                </p>
                            </Col>
                            <Col span={12}>
                                <p style={{textAlign: "right", fontFamily: "arial", color: "#adabab"}}>
                                    <FaCalendarAlt style={{color: "#adabab", marginRight: 10}}/> 42 Meses
                                </p>                       
                            </Col>
                        </Row>

                        <Row>
                            <p 
                                style={{
                                    textAlign: "left", 
                                    marginLeft: -5, 
                                    marginBottom: -15, 
                                    fontFamily: "arial", 
                                    fontSize: 20, 
                                    fontWeight: "bold", 
                                    color:"#337715"
                                }}>
                                R$ 2.000,00
                            </p>
                        </Row>
                    </Card>
                </Col>

                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <Card
                        style={{ width: 250 }}
                        cover={
                            <Carousel>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow9.jpg')}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow10.jpg')}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow11.jpg')}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow12.jpg')}
                                    />
                                </div>
                            </Carousel>
                        }
                        actions={[
                            <HeartOutlined key="like"/>,
                            <DeleteOutlined key="edit" />,
                        ]}
                    >
                        <Row>
                            <Col span={16}>
                                <p style={{textAlign: "left", marginLeft: -5, fontFamily: "arial", color: "#adabab"}}>
                                    Vaca
                                </p>
                            </Col>
                            <Col span={8}>
                                <Tag color="#337715" style={{marginTop: -15}}>RECENTE</Tag>
                            </Col>
                        </Row>
                        <Row>
                            <p style={{textAlign: "left", marginLeft: -5, fontFamily: "arial", fontWeight: "bold"}}>
                                Jersey
                            </p>
                        </Row>
                        <Row style={{marginTop: -15}}>
                            <p style={{textAlign: "left", marginLeft: -5, fontFamily: "arial"}}>
                                Cotia / SP
                            </p>
                        </Row>

                        <Row>
                            <Col span={12}>
                                <p style={{textAlign: "left", fontFamily: "arial", color: "#adabab"}}>
                                    <FaWeightHanging style={{color: "#adabab", marginRight: 10}}/> 250 KG
                                </p>
                            </Col>
                            <Col span={12}>
                                <p style={{textAlign: "right", fontFamily: "arial", color: "#adabab"}}>
                                    <FaCalendarAlt style={{color: "#adabab", marginRight: 10}}/> 3 anos
                                </p>                       
                            </Col>
                        </Row>

                        <Row>
                            <p 
                                style={{
                                    textAlign: "left", 
                                    marginLeft: -5, 
                                    marginBottom: -15, 
                                    fontFamily: "arial", 
                                    fontSize: 20, 
                                    fontWeight: "bold", 
                                    color:"#337715"
                                }}>
                                R$ 4.500,00
                            </p>
                        </Row>
                    </Card>
                </Col>

                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <Card
                        style={{ width: 250 }}
                        cover={
                            <Carousel>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow13.jpg')}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow14.jpg')}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow15.jpg')}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="example"
                                        style={{width: "100%"}}
                                        src={require('../../../img/cow/cow16.jpg')}
                                    />
                                </div>
                            </Carousel>
                        }
                        actions={[
                            <HeartOutlined key="like"/>,
                            <DeleteOutlined key="edit" />,
                        ]}
                    >
                        <Row>
                            <Col span={16}>
                                <p style={{textAlign: "left", marginLeft: -5, fontFamily: "arial", color: "#adabab"}}>
                                    Novilha 
                                </p>
                            </Col>
                            <Col span={8}>
                                <Tag color="#108ee9" style={{marginTop: -15}}>LEILÃO</Tag>
                            </Col>
                        </Row>
                        <Row>
                            <p style={{textAlign: "left", marginLeft: -5, fontFamily: "arial", fontWeight: "bold"}}>
                                Nelore
                            </p>
                        </Row>
                        <Row style={{marginTop: -15}}>
                            <p style={{textAlign: "left", marginLeft: -5, fontFamily: "arial"}}>
                                Cuiaba / MT
                            </p>
                        </Row>

                        <Row>
                            <Col span={12}>
                                <p style={{textAlign: "left", fontFamily: "arial", color: "#adabab"}}>
                                    <FaWeightHanging style={{color: "#adabab", marginRight: 10}}/> 195 KG
                                </p>
                            </Col>
                            <Col span={12}>
                                <p style={{textAlign: "right", fontFamily: "arial", color: "#adabab"}}>
                                    <FaCalendarAlt style={{color: "#adabab", marginRight: 10}}/> 22 Meses
                                </p>                       
                            </Col>
                        </Row>

                        <Row>
                            <p 
                                style={{
                                    textAlign: "left", 
                                    marginLeft: -5, 
                                    marginBottom: -15, 
                                    fontFamily: "arial", 
                                    fontSize: 20, 
                                    fontWeight: "bold", 
                                    color:"#337715"
                                }}>
                                R$ 1.690,00
                            </p>
                        </Row>
                    </Card>
                </Col>
           
            </Row>

        </div>
    )
}

export default Home;