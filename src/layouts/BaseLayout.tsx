import React, { useState } from 'react';
import { DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Button } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './baseLayout.module.less';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('通用', '/', <DesktopOutlined />),
  getItem('布局', '布局', <TeamOutlined />, [getItem('Team 1', '/page2')]),
  getItem('导航', '导航', <TeamOutlined />, [getItem('Team 1', '/page1/test')])
];
console.log(import.meta.env.TEST);

const BaseLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  const navigate = useNavigate();

  const menuClick = ({ key }: { key: string }) => {
    console.log('key:', key);
    navigate(key);
  };
  const changeTheme = () => {
    const root = document.querySelector(':root') as HTMLElement;
    const theme = root.dataset.theme;
    root.dataset.theme = theme === 'dark' ? '' : 'dark';
  };
  const changeColor = (color: string) => {
    const root = document.querySelector(':root') as HTMLElement;
    root.style.setProperty('--main-color', color);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          onClick={menuClick}
        />
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Button onClick={changeTheme}>切换主题</Button>
          <Button onClick={() => changeColor('#fff')}>切换颜色</Button>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
