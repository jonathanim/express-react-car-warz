import React from 'react';
import { Row } from 'react-bootstrap'
import CarCard from './CarCard';

function CurrentWinner() {
    return (
        <>
            <Row className="text-center">
                <h1>Top Winner</h1>
            </Row>
            <Row className='justify-content-center' style={{ height: '90vh' }}>

                <CarCard title="Current Winner" model="Volkswagen GTI" year={2018} description="stock" />

            </Row>
        </>
    )
}

export default CurrentWinner;
