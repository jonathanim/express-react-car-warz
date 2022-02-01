import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

function CarCard(props) {

    return (
        <Col sm={2} >
            <Card className='text-center' style={{ width: '18rem', display: "grid", justifyContent: "center", alignContent: "center", padding: "20px 20px", margin: "30px 10px" }}>
                <Card.Header>{props.title}</Card.Header>
                <Card.Img variant="top" src={props.picture || "assets/gti-2018.jpeg"} style={{ width: "250px", display: "block" }} />

                <Card.Body>
                    <Card.Title>{props.model} {props.year}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="dark">View More</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default CarCard;
