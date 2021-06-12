//Core
import React, {useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";

//Routes
import {routes} from '../../_routes';

//Design
import { Menu } from 'antd';

//Icon
import {
    AppstoreOutlined,
    LogoutOutlined,
    UserOutlined
} from "@ant-design/icons";


const { Item } = Menu;

const Header = ({isLogin}) => {
    const location = useLocation();
    const [current, setCurrent] = useState(routes.home);
    useEffect(() => {
        setCurrent(location.pathname)
    }, [location.pathname])
    const handleClick = e => {
        setCurrent(e.key)
    }
    const logOut = () => {

    }
    return (
        <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
        >
            <Item
                key={routes.home}
                icon={<AppstoreOutlined />}
                className={'float-right'}
            >
                <Link to={routes.home}>
                    Home
                </Link>
            </Item>
            {!isLogin &&
                <Item
                    key={routes.login}
                    icon={<UserOutlined/>}
                    className={'float-right'}
                >
                    <Link to={routes.login}>
                        Login
                    </Link>
                </Item>
            }
        </Menu>
    )

}


export default Header;
