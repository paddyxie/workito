import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import {Breadcrumb, Layout} from 'antd';

import './App.css';
import AppMenu from './AppMenu'

const {Header, Content, Footer, Sider} = Layout;

class AppLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({collapsed});
  };

  render() {
    const {collapsed} = this.state;
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Header className="site-layout-background">
          <div className="logo" style={{width: "300px"}}>
            <h1 style={{color: "white"}}>
              <Link to="/">Work Kit</Link>
            </h1>
          </div>
        </Header>
        <Layout className="site-layout">
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <AppMenu/>
          </Sider>
          <Layout>
            <Content>
              <Breadcrumb style={{margin: '16px 16px'}}>
                <Breadcrumb.Item>Project</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{padding: 16, minHeight: 500}}>
                <Outlet/>
              </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Work It Out @ 2022</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;