import React from 'react';
import { Line } from 'react-chartjs-2';
import { Row, Col, Typography } from 'antd';
import {Chart as ChartJS} from 'chart.js/auto' // fixing "category" is not a registered scale 

const { Title } = Typography;

const LineChart = ( {coinHistory, currentPrice, coinName} ) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinTimestamp.push(
          new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
        );
        coinPrice.push(coinHistory?.data?.history[i].price);
      }

    const data = {
        labels: coinTimestamp,
        datasets: [ 
            {   
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#291cb9',
                borderColor: '#291cb9',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                { 
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">
                    {coinName} Price Chart
                </Title>
                <Col className="price-container">
                        <Title level={5} className="price-change" style={{ fontFamily: 'Comic Sans MS'}}>
                            {coinHistory?.data?.change} %
                        </Title>
                        <Title level={5} className="current-price" style={{ fontFamily: 'Comic Sans MS'}}>
                        Current {coinName} Price: $ {currentPrice}
                        </Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    );
}

export default LineChart;
