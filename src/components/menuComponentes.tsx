import React, { CSSProperties, FC, useCallback, useState } from 'react';
import { Layout, Menu, Breadcrumb, Button, Message, Image, Space } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Container } from './container'


const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
const MenuComponentes = ({ }) => {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)
    const toggle = useCallback(
      () => setHideSourceOnDrag(!hideSourceOnDrag),
      [hideSourceOnDrag],
    )
    const [collapse, setCollapse] = useState(false);
    const handleCollapsed = () => {
        setCollapse(!collapse);
    };
    return (
        <Layout className='layout-collapse-demo'>
            <Sider collapsed={collapse} collapsible trigger={null} breakpoint='xl'>
                <div className='logo' />
                <Menu
                    defaultOpenKeys={['1']}
                    defaultSelectedKeys={['0_3']}
                    onClickMenuItem={(key) =>
                        Message.info({ content: `You select ${key}`, showIcon: true })
                    }

                    style={{ width: '100%' }}
                >

                    <SubMenu
                        key='1'
                        title={
                            <span>
                                <IconCalendar />
                                dnd-images
                            </span>
                        }
                    >
                        <MenuItem key='1_1'><Image
                            width={40}
                            height={30}
                            src='some-error.png'
                        /></MenuItem>
                        <MenuItem key='1_2'>Menu 2</MenuItem>
                        <SubMenu key='2' title='Navigation 2'>
                            <MenuItem key='2_1'>Menu 1</MenuItem>
                            <MenuItem key='2_2'>Menu 2</MenuItem>
                        </SubMenu>
                        <SubMenu key='3' title='Navigation 3'>
                            <MenuItem key='3_1'>Menu 1</MenuItem>
                            <MenuItem key='3_2'>Menu 2</MenuItem>
                            <MenuItem key='3_3'>Menu 3</MenuItem>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header>
                    <Button shape='round' className='trigger' onClick={handleCollapsed}>
                        {collapse ? <IconCaretRight /> : <IconCaretLeft />}
                    </Button>
                </Header>
                <Layout style={{ padding: '0 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content>Layout

                        <DndProvider backend={HTML5Backend}>
                            <Container hideSourceOnDrag={hideSourceOnDrag} />
                        </DndProvider>

                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </Layout>
    );
}
export default MenuComponentes;