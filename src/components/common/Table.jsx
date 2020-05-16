import React, { Component, Fragment } from "react";
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';
import { Table, Input, Button, Row, Tooltip, Popconfirm, Drawer, Progress, Modal, Select, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const colors = ["geekblue", "green", "cyan", "blue", "purple", "volcano", "magenta", "gold"];
class AntTable extends Component{

    constructor(){
        super();

        this.handleSearch = this.handleSearch.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.confirm = this.confirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
    };

    state = {
        selectedRowKeys: [], 
        searchText: '',
        columns: [],
        data: [],
        visible: false,
        dataDrawer: [],
        modalVisible: false,
        image: "",
        pageSize: 5
    }

    confirm(c) {
        this.props.delete(c);
    }

    getColumnSearchProps = (dataIndex, searchName) => ({
        filterDropdown: ({
            setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => { this.searchInput = node; }}
                    placeholder={`Procure por ${searchName}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon={<SearchOutlined />}
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Procurar
                </Button>
                <Button
                    onClick={() => this.handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                >
                    Limpar
                </Button>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: (text) => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    })
    
    handleSearch(selectedKeys, confirm){
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    }
    
    handleReset(clearFilters){
        clearFilters();
        this.setState({ searchText: '' });
    }

    componentDidMount(){
        let columns = this.props.columns.map(c => {
            if(c.key !== "action" && c.key !== "progressBar" && c.key !== "view" && c.key !== "tag" && c.key !== "tagWithoutLink"){
                if(c.withoutSearch){
                    return {
                        title: c.title,
                        dataIndex: c.dataIndex,
                        key: c.key,
                        width: c.width,
                        //render: <a href="javascript:;">"Teste"</a>,
                        sorter: (a, b) => {
                            if(c.sortKind === "string") return a[c.dataIndex].localeCompare(b[c.dataIndex])
                            if(c.sortKind === "number") return a[c.dataIndex] - b[c.dataIndex]
                            if(c.sortKind === "date") return new Date(b[c.dataIndex]) - new Date(a[c.dataIndex])
                        },
                        sortDirections: ['descend', 'ascend']
                    }
                }else{
                    return {
                        title: c.title,
                        dataIndex: c.dataIndex,
                        key: c.key,
                        width: c.width,
                        //render: <a href="javascript:;">"Teste"</a>,
                        sorter: (a, b) => {
                            if(c.sortKind === "string") return a[c.dataIndex].localeCompare(b[c.dataIndex])
                            if(c.sortKind === "number") return a[c.dataIndex] - b[c.dataIndex]
                            if(c.sortKind === "date") return new Date(b[c.dataIndex]) - new Date(a[c.dataIndex])
                        },
                        sortDirections: ['descend', 'ascend'],
                        ...this.getColumnSearchProps(c.dataIndex, c.searchName),
                    }
                }
            }else if(c.key === "tag"){
                let link = c.link;
                return {
                    title: c.title,
                    dataIndex: c.dataIndex,
                    key: c.key,
                    width: c.width,
                    render: (c, text, index) => 
                        <Tag color={colors[index]} key={c} onClick={() => localStorage.setItem('@SmartPec:viewID', text._id)}>
                            {c.toUpperCase()}
                        </Tag>
                }
            }else if(c.key === "progressBar"){
                return {
                    title: c.title,
                    dataIndex: 'progressBar',
                    key: c.key,
                    width: c.width,
                    render: c => 
                    <Fragment>
                        { c === 100 ? <Progress percent={c} size="small" /> : <Progress percent={c} size="small" status="active" /> }
                    </Fragment>
                }
            }else if(c.key === "view"){
                return {
                    title: c.title,
                    dataIndex: c.dataIndex,
                    key: c.key,
                    width: c.width,
                    render: c => 
                    <Fragment>
                        <Row>
                            <Tooltip title="Visualizar" placement="left">
                                <Button 
                                    shape="circle" 
                                    icon="eye" 
                                    size="small" 
                                    style={{ marginRight:5, color:"white", backgroundColor:"#33aa55"}}
                                    onClick={() => this.handlePreview(c)}
                                />                                
                            </Tooltip>
                        </Row>
                    </Fragment>
                }
            }else{
                return {
                    title: c.title,
                    dataIndex: '_id',
                    key: c.key,
                    render: c => 
                    <Fragment>
                        <Row>
                            <Tooltip title="Visualizar" placement="left">
                                <Button 
                                    shape="circle" 
                                    icon="eye" 
                                    size="small" 
                                    style={{ marginRight:5, color:"white", backgroundColor:"#33aa55"}}
                                    onClick={() => this.openDrawer(c)}
                                />                                
                            </Tooltip>
                            <Tooltip title="Editar" placement="left">
                                <Link to={this.props.new}>
                                    <Button 
                                        type="primary" 
                                        shape="circle" 
                                        icon="edit" 
                                        size="small" 
                                        style={{ marginRight:5}}
                                        onClick={() => this.props.update(c)}
                                    />
                                </Link>                                
                            </Tooltip>
                            <Tooltip title="Excluir" placement="right">
                                <Popconfirm title="Tem certeza que deseja deletar esse dado?" onConfirm={() => this.confirm(c)} okText="Sim" cancelText="Não">
                                    <Button 
                                        shape="circle" 
                                        icon="delete" 
                                        size="small" 
                                        style={{ marginRight:5, color:"white", backgroundColor:"#f25771"}}
                                    />
                                </Popconfirm>
                            </Tooltip>
                        </Row>
                    </Fragment>
                    ,
                }
            }
        });
        
        this.setState({
            columns
        })
    }

    handleCancel(){
        this.setState({ modalVisible: false });
    }

    handlePreview(file){
        this.setState({ image: file, modalVisible: true });
    }

    render(){
        return(
            <Fragment>
                <Row>
                    {/*<Table 
                        columns={this.state.columns} 
                        pagination={ !this.props.pagination ? this.props.pagination : { pageSize: parseFloat(this.state.pageSize) }} 
                        dataSource={this.props.dataSource} 
                        rowKey={record => record._id}
                        rowClassName={(record, index) => 
                            record._id === "Total" ? 
                                "antTableRowTotal"
                            : (index % 2) === 0 ? 'antTableRowEven' : 'antTableRowOdd'
                        }
                        size={this.props.size ? this.props.size : "default"}
                    />*/}
                    <Table 
                        bordered
                        columns={this.state.columns} 
                        dataSource={this.props.dataSource} 
                        scroll={{ x: 10000, y: 400 }} 
                        rowKey={record => record.id}
                        pagination={false} 
                        rowClassName={(record, index) => 
                            record._id === "Total" ? 
                                "antTableRowTotal"
                            : (index % 2) === 0 ? 'antTableRowEven' : 'antTableRowOdd'
                        }
                        size="small" 
                    />
                </Row>
            </Fragment>
        )
    }
}

export default AntTable;