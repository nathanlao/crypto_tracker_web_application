import React, { useState, useEffect }from 'react';
import { Button, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/crypto.webp';

const Navbar = () => {
  const [activeButton, setActiveButon] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize < 768) {
        setActiveButon(false);
    } else {
        setActiveButon(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={3} className="logo" italic>
                <Link to="/">Crypto Tracker</Link> 
            </Typography.Title>
            
            <Button className="menu-control-container" onClick={() => setActiveButon(!activeButton)}>
                <MenuOutlined />
            </Button>

        </div>
        {/* {activeMenu && (
        <Menu theme="dark">
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
        </Menu>   
        )}   */}
        {activeButton && (
            <>
            <Button type="link" style={{ backgroundColor: '#130F40', color: 'white'}} icon={<HomeOutlined />} shape="round" block>
                <Link to="/">   Home</Link>
            </Button>
            <br />
            <br />
            <Button type="link" style={{ backgroundColor: '#130F40', color: 'white' }} icon={<FundOutlined />} shape="round" block>
                <Link to="/Cryptocurrencies">   Cryptocurrencies</Link>
            </Button>
            <br />
            <br />
            <Button type="link" style={{ backgroundColor: '#130F40', color: 'white' }} icon={<MoneyCollectOutlined />} shape="round" block>
                <Link to="/exchanges">   Exchanges</Link>
            </Button>
            <br />
            <br />
            <Button type="link" style={{ backgroundColor: '#130F40', color: 'white' }} icon={<BulbOutlined />} shape="round" block>
                <Link to="/news">   News</Link>
            </Button>
            </>
        )}
    </div>
  );
};

export default Navbar;
