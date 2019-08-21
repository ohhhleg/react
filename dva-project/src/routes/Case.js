import React,{Component} from 'react'
import { Row, Col, Card, Table, Popconfirm, Button, Input, Form} from 'antd';
import Breadcrumb from '../components/Breadcrumb'
const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
      <tr {...props} />
    </EditableContext.Provider>
  );
const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    state = {
      editing: false,
    };    
    
    toggleEdit = () => {
      const editing = !this.state.editing;
      this.setState({ editing }, () => {
        if (editing) {
          this.input.focus();
        }
      });
    };
  
    save = e => {
      const { record, handleSave } = this.props;
      this.form.validateFields((error, values) => {
        if (error && error[e.currentTarget.id]) {
          return;
        }
        this.toggleEdit();
        handleSave({ ...record, ...values });
      });
    };
  
    renderCell = form => {
      this.form = form;
      const { children, dataIndex, record, title } = this.props;
      const { editing } = this.state;
      return editing ? (
        <Form.Item style={{ margin: 0 }}>
          {form.getFieldDecorator(dataIndex, {
            rules: [
              {
                required: true,
                message: `${title} is required.`,
              },
            ],
            initialValue: record[dataIndex],
          })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingRight: 24 }}
          onClick={this.toggleEdit}
        >
          {children}
        </div>
      );
    };
  
    render() {
      const {
        editable,
        dataIndex,
        title,
        record,
        index,
        handleSave,
        children,
        ...restProps
      } = this.props;
      return (
        <td {...restProps}>
          {editable ? (
            <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
          ) : (
            children
          )}
        </td>
      );
    }
  }
  
export default class Case extends Component{
    constructor(props) {
        super(props);
        // 列表
        this.columns = [{
            title: 'name',
            dataIndex: 'name',
            width: '24%',
            editable: true,
        }, {
            title: 'age',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,        
            render: age => `${age}`,
            editable: true,
            width:'10%'
        },{
            title: 'gender',
            dataIndex: 'gender',
            filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
            width:'10%',
            filterMultiple: false,
            onFilter: (value, record) => record.gender.indexOf(value) === 0,
        },
         {
            title: 'address',
            dataIndex: 'address',
            editable: true,
        }, {
            title: 'operation',
            dataIndex: 'operation',
            width:'10%',
            render: (text, record, index) => {
                return (
                    this.state.dataSource.length > 1 ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record, index)}>
                                <span>Delete</span>
                            </Popconfirm>
                        ) : null
                );
            },
        }];
        this.state = {
          // 数据源
            dataSource: [{
                key: '0',
                name: 'Edward King 0',
                age: '42',
                gender:'male',
                address: 'London, Park Lane no. 0',
            }, {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                gender:'female',
                address: 'London, Park Lane no. 1',
            }],
            count: 2,
            // deleteIndex: -1
        };
    }
    onDelete = (record, index) => {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ deleteIndex: record.key});
        setTimeout(() => {
            this.setState({ dataSource })
        }, 500);
    };

    //  //新增行
    // handleAdd = () => {
    //     const { count, dataSource } = this.state;
    //     const newData = {
    //         key: count,
    //         name: `Edward King ${count}`,
    //         age: 32,
    //         address: `London, Park Lane no. ${count}`,
    //     };
    //     this.setState({
    //         dataSource: [newData, ...dataSource],
    //         count: count + 1,
    //     });
    // };
    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ dataSource: newData });
      };
    render(){
        const { dataSource } = this.state;
        const components = {
            body: {
              row: EditableFormRow,
              cell: EditableCell,
            },
          };
        const columns = this.columns.map(col=>{
            if (!col.editable){
                return col;
            }
            return{
                ...col,
                onCell:record =>({
                    record,
                    editable:col.editable,
                    dataIndex:col.dataIndex,
                    title:col.title,
                    handleSave:this.handleSave
                }),
            };
        });
        return(
            <div>
            <Breadcrumb first="用户" second="案例" />
            <Row gutter={16}>
                <Col className="gutter-row" md={23}>
                    <div>
                        <Card bordered={false}>
                            {/* 新增行 */}
                            {/* <Button 
                            type="primary" style={{ marginBottom: 16 }}className="editable-add-btn mb-s" onClick={this.handleAdd}>Add</Button> */}
                            <Table
                                dataSource={dataSource} //数据源
                                columns={columns} //列表
                                components={components}
                                bordered
                                rowClassName={(record) => {
                                    if (this.state.deleteIndex === record.key) return 'animated zoomOutLeft min-black';
                                    return 'animated fadeInRight';
                                }}
                            />
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
        )
    }
}
