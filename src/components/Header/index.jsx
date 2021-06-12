//Core
import React, {useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";

//Action
import {userLogOut} from "../../_actions";

//Redux
import {connect} from "react-redux";

//Routes
import {routes} from '../../_routes';

//Design
import { Menu } from 'antd';

//Icon
import {
    AppstoreOutlined,
    LogoutOutlined,
    UserOutlined,
    SettingOutlined,
} from "@ant-design/icons";


const { Item, SubMenu } = Menu;

const Header = ({isLogin, user, userLogOut}) => {
    // const {isLogin, user} = useSelector((state) => ({...state.userReducer}))

    const location = useLocation();
    const [current, setCurrent] = useState(routes.home);
    useEffect(() => {
        setCurrent(location.pathname)
    }, [location.pathname])
    const handleClick = e => {
        setCurrent(e.key)
    }
    const logOut = () => {
        userLogOut()
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
            {
                isLogin &&
                <SubMenu
                    icon={<SettingOutlined />}
                    title={user.email}
                    className={'float-right'}
                    key={'sub1'}
                >
                    <Item
                        key={routes.user}
                        icon={<AppstoreOutlined />}
                    >
                        <Link to={routes.user}>Dashboard</Link>
                    </Item>
                    <Item
                        key={'logout'}
                        icon={<LogoutOutlined />}
                        onClick={logOut}
                    >
                        <Link to={routes.login}>LogoOut</Link>
                    </Item>
                </SubMenu>
            }
        </Menu>
    )

}

const mapStateToProps = ({userReducer: {isLogin, user}}) => {
    return {isLogin, user}
}


export default connect(mapStateToProps, {userLogOut})(Header);
