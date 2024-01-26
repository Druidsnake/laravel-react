import React from 'react'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
const { Header, Content, Footer, Sider } = Layout

const items1: MenuProps['items'] = ['1', '2', '3', '4'].map((key) => ({
    key,
    label: `nav ${key}`,
}))

export default () => {
    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                zIndex: 1,
            }}
        >
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items1}
                style={{ flex: 1, minWidth: 0 }}
            />
        </Header>
    )
}
