import { Layout, Menu, Icon } from 'antd';
import React from 'react'
import {Route,Link } from 'dva/router';
import menu from './menu'
import '../style/index.less'
import IndexContent from '../components/IndexContent/IndexContent'
import Animations from './Animations'
import Case from './Case'
import User3 from './User3'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class Index extends React.Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];


  state = {
    collapsed: false,
    menu,
    openKeys: ['sub1'],

  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu 
            theme="dark" 
            mode="inline" 
            // defaultSelectedKeys={['1']}
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
          >
           {
             this.state.menu.map((item)=>{
               return(
                 <SubMenu key={item.key} title={item.title}>
                   {
                     item.options.map((item)=>{
                       return(
                         <Menu.Item key={item.key}>
                           <Link to={item.url}>
                           {item.title}
                           </Link>
                         </Menu.Item>
                       )
                     })
                   }
                 </SubMenu>
               )
             })
           }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              height:680,
              maxHeight: 680,
              overflowY:'auto'
            }}
          >
            <Route path="/index/home" component={IndexContent}/>
            <Route path="/index/animation" component={Animations}/>
            <Route path="/index/case" component={Case}/>
            <Route path="/index/user3" component={User3}/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Index;
