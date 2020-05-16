import React, { Fragment } from "react";
import { Table, Input, Button, Row, Tooltip, Popconfirm, Drawer, Progress, Modal, Select, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
import { FileSearchOutlined, GoldOutlined, SearchOutlined } from "@ant-design/icons";
import Highlighter from 'react-highlight-words';
const colors = ["geekblue", "green", "cyan", "blue", "purple", "volcano", "magenta", "gold"];

class AntTable extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
        columns: [],
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
            <Input
                ref={node => {
                    this.searchInput = node;
                }}
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys[0]}
                onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Space>
            <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
            >
                Procurar
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Limpar
            </Button>
            </Space>
        </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
        if (visible) {
            setTimeout(() => this.searchInput.select());
        }
        },
        render: text =>
        this.state.searchedColumn === dataIndex ? (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ) : (
            text
        ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    componentDidMount(){
        let columns = this.props.columns.map(c => {
            if(c.key !== "action" && c.key !== "progressBar" && c.key !== "view" && c.key !== "tag" && c.key !== "tagWithoutLink"){
                if(c.fix){
                    if(c.withoutSearch){
                        return {
                            title: c.title,
                            dataIndex: c.dataIndex,
                            key: c.key,
                            width: c.width,
                            fixed: c.fixed,
                            sorter: (a, b) => {
                                if(c.sortKind === "string") return a[c.dataIndex].localeCompare(b[c.dataIndex])
                                if(c.sortKind === "number") return a[c.dataIndex] - b[c.dataIndex]
                                if(c.sortKind === "date") return new Date(b[c.dataIndex]) - new Date(a[c.dataIndex])
                            },
                            sortDirections: ['descend', 'ascend'],
                        }
                    }else{
                        return {
                            title: c.title,
                            dataIndex: c.dataIndex,
                            key: c.key,
                            width: c.width,
                            fixed: c.fixed,
                            sorter: (a, b) => {
                                if(c.sortKind === "string") return a[c.dataIndex].localeCompare(b[c.dataIndex])
                                if(c.sortKind === "number") return a[c.dataIndex] - b[c.dataIndex]
                                if(c.sortKind === "date") return new Date(b[c.dataIndex]) - new Date(a[c.dataIndex])
                            },
                            sortDirections: ['descend', 'ascend'],
                            ...this.getColumnSearchProps(c.dataIndex, c.searchName),
                        }
                    }
                }else{
                    if(c.withoutSearch && c.withoutSort){
                        return {
                            title: c.title,
                            dataIndex: c.dataIndex,
                            key: c.key,
                            width: c.width
                        }
                    }else if(c.withoutSearch){
                        return {
                            title: c.title,
                            dataIndex: c.dataIndex,
                            key: c.key,
                            width: c.width,
                            sorter: (a, b) => {
                                if(c.sortKind === "string") return a[c.dataIndex].localeCompare(b[c.dataIndex])
                                if(c.sortKind === "number") return a[c.dataIndex] - b[c.dataIndex]
                                if(c.sortKind === "date") return new Date(b[c.dataIndex]) - new Date(a[c.dataIndex])
                            },
                            sortDirections: ['descend', 'ascend']
                        }
                    }else if(c.withoutSort){
                        return {
                            title: c.title,
                            dataIndex: c.dataIndex,
                            key: c.key,
                            width: c.width,
                            ...this.getColumnSearchProps(c.dataIndex, c.searchName),
                        }
                    }else{
                        return {
                            title: c.title,
                            dataIndex: c.dataIndex,
                            key: c.key,
                            width: c.width,
                            sorter: (a, b) => {
                                if(c.sortKind === "string") return a[c.dataIndex].localeCompare(b[c.dataIndex])
                                if(c.sortKind === "number") return a[c.dataIndex] - b[c.dataIndex]
                                if(c.sortKind === "date") return new Date(b[c.dataIndex]) - new Date(a[c.dataIndex])
                            },
                            sortDirections: ['descend', 'ascend'],
                            ...this.getColumnSearchProps(c.dataIndex, c.searchName),
                        }
                    }
                }
            }else if(c.key === "tag"){
                let color = c.color;
                return {
                    title: c.title,
                    dataIndex: c.dataIndex,
                    key: c.key,
                    width: c.width,
                    ...this.getColumnSearchProps(c.dataIndex, c.searchName),
                    render: (c, text, index) => 
                        <Tag color={color} key={c}>
                            {c.toUpperCase()}
                        </Tag>,
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
            }else{
                return {
                    title: c.title,
                    dataIndex: 'proposta',
                    key: c.key,
                    fixed: c.fixed,
                    render: c => 
                    <Fragment>
                        <Row>
                            <Tooltip title="Exibir" placement="left">
                                <Button 
                                    shape="circle" 
                                    style={{ marginLeft: 10, color:"white", backgroundColor:"#33aa55"}} 
                                    icon={<FileSearchOutlined />} 
                                    onClick={() => this.props.showDrawer("PROPOSAL", c)}
                                />                             
                            </Tooltip>
                            <Tooltip title="Estoque" placement="right">
                                <Button 
                                    shape="circle" 
                                    style={{ marginLeft: 10}} 
                                    type="primary"
                                    icon={<GoldOutlined />} 
                                />                             
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

    render() {
        return( 
            <Fragment>
                <Table 
                    columns={this.state.columns} 
                    dataSource={this.props.dataSource}
                    scroll={{ x: 2960, y: 450 }} 
                    rowKey={record => record.id}
                    pagination={false} 
                    rowClassName={(record, index) => 
                        record._id === "Total" ? 
                            "antTableRowTotal"
                        : (index % 2) === 0 ? 'antTableRowEven' : 'antTableRowOdd'
                    }
                    size="small" 
                />
            </Fragment>
        )
    }
}

export default AntTable