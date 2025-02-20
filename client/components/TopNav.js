import {Menu} from "antd"
import Link from "next/link"    // make sure not to destructure it like ... `{Link}`
 
import {HomeOutlined, LoginOutlined, UserOutlined} from "@ant-design/icons"

const { Item } = Menu

const TopNav = () => {
    return (
        <Menu mode="horizontal" >
            <Item>
                <Link href="/" style={{textDecoration : 'none'}}>
                    {/* <a>App</a>  a-tag is falling to Error, By clashing it with  Link-component  */}
                    <HomeOutlined /> 
                    App
                </Link>
            </Item>
            <Item>
                <Link href="/login" style={{textDecoration : 'none'}}>
                    {/* <a>Login</a> */}
                    <LoginOutlined /> 
                    Login
                </Link>
            </Item>
            <Item>
                <Link href="/register" style={{textDecoration : 'none'}}>
                    {/* <a>Register</a> */}
                    <UserOutlined /> 
                    Register
                </Link>
            </Item>
        </Menu>
    )
}

export default TopNav