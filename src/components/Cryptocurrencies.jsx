import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoAPI';

const Cryptocurrencies = ( {simplified} ) => {
  const count = simplified ? 10 : 100; // simplified is true, then set count to 10
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Allow searching or filter out only the searched coin in the array(100 crypto)
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setCryptos(filteredData);

  }, [cryptosList, searchTerm]); // useEffect() whenever cryptosList/searchTerm get changed

  if (isFetching) {
    return 'Loading...';
  }

  return (
    <>  
        {!simplified && (
          <div className="search-crypto">
            <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        )}
        
        <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos?.map((currency) => ( // ? loop over including the undefined
              <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                <Link to={`/crypto/${currency.id}`}>
                  <Card 
                    hoverable
                    title={`${currency.rank}. ${currency.name}`}
                    extra={<img className="crypto-image" src={currency.iconUrl} />} // content(icon) to the top right of the card
                    headStyle={{ backgroundColor: '#5c6cfa', color: '#ffffff', fontFamily:'Monaco'}}
                    bodyStyle={{ backgroundColor: '#a9bbff', fontFamily:'Monaco'}}
                  > 
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {millify(currency.change)}%</p>
                  </Card>
                </Link>
              </Col>
          ))}

        </Row>
    </>
  );
}

export default Cryptocurrencies