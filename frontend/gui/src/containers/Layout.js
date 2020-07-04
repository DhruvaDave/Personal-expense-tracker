import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, Route } from 'react-router-dom';
import UserExpenses from './AddUserExpensesView';


const { Header, Content, Footer } = Layout;

// function onFirstClick (e)  {
//     console.log("----onFirstClick",e);
//     // this.setState({
//     //     toDate : (date, dateString)
//     // });
//   }

const CustomLayout = (props) => {

      
    return (
        <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                // defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">
                    <Link to="/expenses" component={UserExpenses}>
                        <Icon type="plus" />
                        <span>Add Expenses</span>
                    </Link>
              </Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/">List123</Link></Breadcrumb.Item>
            </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
            </Footer>


            {/* <Layout>
                <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
                    <Icon
                        className="trigger"
                        style={{ cursor: 'pointer' }}
                    />
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    <Route path="/add-user-expenses" component={UserExpenses} />
                    
                </Content>

            </Layout> */}
        </Layout>
    );
}

export default CustomLayout;