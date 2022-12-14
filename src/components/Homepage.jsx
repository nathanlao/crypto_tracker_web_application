import React from 'react';
import millify from 'millify'; // convert long number to human readable strings
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoAPI';
import { Cryptocurrencies, News } from '../components'
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  // console.log(data);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <>
        <Title level={2} className="heading" style={{fontFamily:'Comic Sans MS'}}>
          Global Crypto Stats
        </Title>
        <Row>
            <Col span={12}><Statistic style={{fontFamily:'Comic Sans MS'}} title="Total Cryptocurrencies" value={globalStats.total} valueStyle={{fontFamily:'Comic Sans MS'}} /></Col>
            <Col span={12}><Statistic style={{fontFamily:'Comic Sans MS'}} title="Total Exchanges" value={millify(globalStats.totalExchanges)} valueStyle={{fontFamily:'Comic Sans MS'}} /></Col>
            <Col span={12}><Statistic style={{fontFamily:'Comic Sans MS'}} title="Total Market Cap" value={millify(globalStats.totalMarketCap)} valueStyle={{fontFamily:'Comic Sans MS'}}/></Col>
            <Col span={12}><Statistic style={{fontFamily:'Comic Sans MS'}} title="Total 24h Volumn" value={millify(globalStats.total24hVolume)} valueStyle={{fontFamily:'Comic Sans MS'}}/></Col>
            <Col span={12}><Statistic style={{fontFamily:'Comic Sans MS'}} title="Total Markets" value={millify(globalStats.totalMarkets)} valueStyle={{fontFamily:'Comic Sans MS'}}/></Col>
        </Row>
        <div className="home-heading-container">
            <Title level={2} className="home-title" style={{fontFamily:'Comic Sans MS'}}>
              Top 10 Cryptocurrencies in the world
            </Title>
            <Title level={3} className="show-more" style={{fontFamily:'Comic Sans MS'}}>
                <Link to="./cryptocurrencies">
                  Show More
                </Link>
            </Title>
        </div>
        <Cryptocurrencies simplified/>

        <div className="home-heading-container">
            <Title level={2} className="home-title" style={{fontFamily:'Comic Sans MS'}}>
              Latest Crypto News
            </Title>
            <Title level={3} className="show-more" style={{fontFamily:'Comic Sans MS'}}>
                <Link to="./news">
                  Show More
                </Link>
            </Title>
        </div>
        <News simplified/>
    </>
  );
}

export default Homepage
