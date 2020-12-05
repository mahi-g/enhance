import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Card, CardBody, CardTitle, CardSubtitle  } from "shards-react";
import Divider from './Divider'

const list = [
    {
    name: 'John',
    score: '200'
    },
    {
        name: 'Smith',
        score: '110'
    },
    {
        name: 'Dave',
        score: '22'
    },
    {
        name: 'Ed',
        score: '45'
    },
]

const card = {
    borderRadius: '3px'
}

const layout = {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#666666'
}



//FlexLayout = styled.div

const FriendsList = () => {
    const f = list.map((friend) => {
        return(
            <Row>
                <Col>
                <div style={layout}>
                    <h6>{friend.name}</h6>
                    <p>{friend.score}</p>
                </div>
                    <Divider />
                </Col>
            </Row>
        )
    });

    return (
        <Row>
            <Col sm={{size: 6, offset: 3}} >
                <Card style={card}>
                    <Container fluid className="dr-example-container">
                        {f}
                    </Container>
                </Card>
            </Col>
        </Row>
    );
}


export default FriendsList;