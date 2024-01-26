import React, { useState, useEffect } from 'react'

import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'

import HeaderLayout from './Header'
import FooterLayout from './Footer'
import { Outlet } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

const items1: MenuProps['items'] = ['1', '2', '3', '4'].map((key) => ({
    key,
    label: `nav ${key}`,
}))

const items2: MenuProps['items'] = [
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
].map((icon, index) => {
    const key = String(index + 1)

    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,

        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1
            return {
                key: subKey,
                label: `option${subKey}`,
            }
        }),
    }
})

const Admin: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    return (
        <Layout>
            {/* <Header style={{ display: 'flex', alignItems: 'center', position: 'sticky', top: 0, zIndex: 1 }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items1}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header> */}
            <HeaderLayout />
            <Content style={{ padding: '0 48px 0 100px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 75,
                            bottom: 0,
                        }}
                        width={200}
                        collapsible
                        collapsed={true}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={items2}
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Outlet />
                    </Content>
                </Layout>
            </Content>
            <FooterLayout />
        </Layout>
    )
}

export default Admin
