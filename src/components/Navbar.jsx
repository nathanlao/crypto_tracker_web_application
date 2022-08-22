import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/crypto.webp';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={4} className="logo">
                <Link to="/">Crypto Tracker</Link> 
            </Typography.Title>
        </div>
        {/* <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/Cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>      */}
        <Button type="default" style={{ background: "#a9bbff", borderColor: "#a9bbff" }} icon={<HomeOutlined />} shape="round" block>
            <Link to="/">   Home</Link>
        </Button>
        <br />
        <br />
        <Button type="default" style={{ background: "#a9bbff", borderColor: "#a9bbff" }} icon={<FundOutlined />} shape="round" block>
            <Link to="/Cryptocurrencies">   Cryptocurrencies</Link>
        </Button>
        <br />
        <br />
        <Button type="default" style={{ background: "#a9bbff", borderColor: "#a9bbff" }} icon={<MoneyCollectOutlined />} shape="round" block>
            <Link to="/exchanges">   Exchanges</Link>
        </Button>
        <br />
        <br />
        <Button type="default" style={{ background: "#a9bbff", borderColor: "#a9bbff" }} icon={<BulbOutlined />} shape="round" block>
            <Link to="/news">   News</Link>
        </Button>
    </div>
  );
}

export default Navbar
