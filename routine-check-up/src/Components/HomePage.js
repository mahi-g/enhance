import React, { useState } from 'react'
import { Button, ButtonGroup, Col, Card, Row } from 'shards-react'
import ModalForm from './Tasks/ModalForm'
import CurrentTask from './CurrentTask'


const col = {
    minHeight: '100vh',
    height: '100%',
    borderRight: '2px solid #e6ecf7'
}
const colInner = {
    borderBottom: '2px solid #e6ecf7'
}

const HomePage = (props) => {
    const [currentTaskView, setCurrentTaskView] = useState(true);

    return(
            <Row>
                <Col sm="10" lg="4" style={col}>
                        <Row>
                            <Col style={{ display:'flex', justifyContent:'space-between', ...colInner }}>
                                <h6>Tasks</h6>
                                <ModalForm/>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ display:'flex', justifyContent:'space-between' }}>
                                <h6>Today</h6>
                                <div>
                                    <ButtonGroup size="sm">
                                        <Button 
                                            outline 
                                            onClick={()=>{setCurrentTaskView(true)}}>
                                            Current
                                        </Button>
                                        <Button 
                                            outline 
                                            onClick={()=>{setCurrentTaskView(false)}}>
                                            Day
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" lg="12">
                                {
                                    currentTaskView ? <CurrentTask {...props} /> : <p>False</p>
                                }
                            </Col>
                        </Row>
                    
                </Col>
                <Col sm="10" lg="3" style={col}>
                        <h6>Your tasks today</h6>
                        <Card><p>Finish Laundry</p></Card>
                        <Card><p>Finish Laundry</p></Card>
                </Col>
                <Col sm="10" lg="4" style={col}>
                        <Row>
                            <Col style={colInner}>
                                <h6>Recent Activities</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={colInner}>
                                <Card><p>Finish Laundry</p></Card>
                                <Card><p>Finish Laundry</p></Card>
                                <Card><p>Finish Laundry</p></Card>
                                <Card><p>Finish Laundry</p></Card>
                                <Card><p>Finish Laundry</p></Card>                            
                            </Col>
                        </Row>
                </Col>
            </Row>
    )
}

export default HomePage;