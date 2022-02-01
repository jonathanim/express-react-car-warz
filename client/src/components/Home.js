import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap'
import CarCard from './CarCard';

function Home() {
    return (
        <Row className='justify-content-center' style={{ height: '100vh' }}>
            <Col sm={3}>

                <Carousel>
                    <Carousel.Item interval={2000}>
                        <CarCard />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <CarCard />
                    </Carousel.Item>
                    <Carousel.Item interval={1000} >
                        <CarCard />
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    )
}

export default Home;
