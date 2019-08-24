import React from 'react';
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import request from '../utils/request'
import Breadcrumb from '../components/Breadcrumb'
const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

export default class Information extends React.Component {
  constructor(props) {
    super(props);
  this.state = { 
    visible: false ,
    ind:0,
    inf:
      [
      // {
      //   id:1,
      //   name: 'Lily',
      //   zhiwei:'Progresser',
      //   email:'AntDesign@example.com',
      //   city:'HangZhou',
      //   country:'China',
      //   birthday:'May-8-1990',
      //   message:'blahblahblah',
      //   supervisor:'OLD',
      //   phoneNumber:'+86 182 0000 0000', 

      // },
      // {
      //   id:2,
      //   name:'ohhhleg',
      //   zhiwei:'Progresser+1',
      //   email:'AntDesign@example.com````',
      //   city:'GuangZhou',
      //   country:'China',
      //   birthday:'Apr-19-1996',
      //   supervisor:'YAO',
      //   message:'xxxxxxxxxxxxxxxxxxxxxxx',
      //   phoneNumber:'+86 181 0000 0000', 
      // }
      ]
  };
  }

  // init = async () => {
  //   let data =await request('http://localhost:3000/inf', {
  //     method:'GET'
  //   });
  //   this.setState({
  //     inf:data.data
  //   })
  //   console.log(this.state.inf[0]);
  //   console.log(this.state.ind);
  // }
async componentDidMount(){
  let data =await request('http://localhost:3000/inf', {
      method:'GET'
    });
    this.setState({
      inf:data.data
    })
  this.showDrawer=(i)=> {
      this.setState({
        visible:true,
        ind:i,
      },()=>{
        console.log(this.state.inf[(this.state.ind)*1].name);
        console.log(this.state.inf);
        console.log(this.state.ind);
      });
      
  };
  
    this.onClose = () => {
      console.log(this.state.inf[this.state.ind].name);
      console.log(this.state.ind);
      this.setState({
        visible: false,
      });
    };
}

    


  render() {
    return (
      <div>
        <Breadcrumb/>
        <List
          dataSource={this.state.inf}
          bordered
          renderItem={(item,index) => (
            <List.Item
              key={item.id}
              actions={[
                <a onClick={()=>this.showDrawer(index)}>
                  View Profile
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description= {item.zhiwei}
              />
            </List.Item>
          )}
        />

        <Drawer
          width={600}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          destroyOnClose={true}
        >
          <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
          <p style={pStyle}>Personal</p>
          <Row>
            <Col span={12}>
              {console.log(this.state.inf[(this.state.ind)*1])}
              {/* <DescriptionItem title="Full Name" content={this.state.inf[(this.state.ind)*1].name}/> */}
            </Col>
            <Col span={12}>
              {/* <DescriptionItem title="Account" content={this.state.inf[(this.state.ind)*1].email} /> */}
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              {/* <DescriptionItem title="City" content={this.state.inf[(this.state.ind)*1].city} /> */}
            </Col>
            <Col span={12}>
              {/* <DescriptionItem title="Country" content={this.state.inf[(this.state.ind)*1].country}/> */}
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              {/* <DescriptionItem title="Birthday" content={this.state.inf[(this.state.ind)*1].birthday} /> */}
            </Col>
            <Col span={12}>
              {/* <DescriptionItem title="Message" content={this.state.inf[(this.state.ind)*1].message} /> */}
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Company</p>
          <Row>
            <Col span={12}>
              {/* <DescriptionItem title="Position" content="Programmer" /> */}
            </Col>
            <Col span={12}>
              {/* <DescriptionItem title="Responsibilities" content="Coding" /> */}
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Department" content="AFX" />
            </Col>
            <Col span={12}>
              {/* <DescriptionItem title="Supervisor" content={<a>{this.state.inf[(this.state.ind)*1].supervisor}</a>} /> */}
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Skills"
                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content="AntDesign@example.com" />
            </Col>
            <Col span={12}>
              {/* <DescriptionItem title="Phone Number" content={this.state.inf[(this.state.ind)*1].phoneNumber}/> */}
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}
