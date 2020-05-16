const columns = [{
    title: 'ID',
    searchName: "id",
    dataIndex: 'id',
    key: 'id',
    width: '90px',
    sortKind: "number",
    fixed: 'left',
    fix: true
}, {
    title: 'Proposta',
    searchName: "proposta",
    dataIndex: 'proposta',
    key: 'tag',
    width: '140px',
    sortKind: "string",
    fixed: 'left',
    fix: true,
    color: "#203E27"
},{
    title: 'Cliente',
    searchName: "cliente",
    dataIndex: 'cliente',
    key: 'cliente',
    width: '350px',
    sortKind: "string"
}, {
    title: 'Produto',
    searchName: "produto",
    dataIndex: 'produto',
    key: 'produto',
    width: '500px',
    sortKind: "string"
}, {
    title: 'Marca',
    searchName: "marca",
    dataIndex: 'marca',
    key: 'tag',
    width: '200px',
    sortKind: "string",
    color: "#108ee9"
}, {
    title: 'Quantidade',
    searchName: "quantidade",
    dataIndex: 'quantidade',
    key: 'quantidade',
    width: '90px',
    sortKind: "number",
    withoutSearch: true
}, {
    title: 'Quantidade Pote',
    searchName: "quantidade pote",
    dataIndex: 'quantidade_pote',
    key: 'quantidade_pote',
    width: '170px',
    sortKind: "number",
    withoutSearch: true
}, {
    title: 'Saldo',
    searchName: "saldo",
    dataIndex: 'saldo',
    key: 'saldo',
    width: '90px',
    sortKind: "number",
    withoutSearch: true
}, {
    title: 'Observação Sorocaps',
    searchName: "observação",
    dataIndex: 'obs_sorocaps',
    key: 'obs_sorocaps',
    width: '600px',
    sortKind: "string",
    withoutSearch: true,
    withoutSort: true
}, {
    title: 'Observação Henriplast',
    searchName: "observação",
    dataIndex: 'obs_henriplast',
    key: 'obs_henriplast',
    width: '600px',
    sortKind: "string",
    withoutSearch: true,
    withoutSort: true
},{
    title: 'Ação',
    dataIndex: 'uf',
    key: 'action',
    width: 10,
    show: true,
    fixed: 'right'
}];

export default columns;