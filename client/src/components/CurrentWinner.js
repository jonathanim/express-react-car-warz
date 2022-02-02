import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap'
import CarCard from './CarCard';

function CurrentWinner() {

    const [currentWinner, setCurrentWinner] = useState([])

    useEffect(() => {
        fetch("/api")
            .then(response => response.json())
            .then(data => setCurrentWinner(data))
    }, []);
    console.log(currentWinner)
    return (
        <>
            <Row className="text-center">
                <h1 style={{ fontSize: "100px", fontWeight: "bold" }}>Top Winner</h1>
            </Row>
            <Row className='justify-content-center' style={{ height: '90vh' }}>
                <CarCard title="Current Winner" model={currentWinner.model} year={currentWinner.year} description={currentWinner.description} likes={currentWinner.likes} />

            </Row>
        </>
    )
}

export default CurrentWinner;
