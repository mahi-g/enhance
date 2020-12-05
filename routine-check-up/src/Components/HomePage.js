import React, { useState } from 'react'
import { 
    Button, 
    ButtonGroup, 
    Col, 
    Card, 
    Fade,
    Row 
} from 'shards-react'
import ModalForm from './Tasks/ModalForm'
import CurrentTask from './CurrentTask'
import TasksToday from './TasksToday'


const margin = {
    marginTop: "5%"
}
const col = {
    minHeight: '30vh',
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
                            <Col style={{ display:'flex', justifyContent:'space-between', marginTop:"5%", marginBottom:"5%", ...colInner }}>
                                <h5>Tasks</h5>
                                <ModalForm handleAddTask={props.handleAddTask}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ display:'flex', justifyContent:'space-between', marginTop:"5%" }}>
                                <h6>Today</h6>
                                <div>
                                    <ButtonGroup size="sm">
                                        <Button 
                                            outline 
                                            theme="primary"
                                            onClick={()=>{setCurrentTaskView(true)}}>
                                            Current
                                        </Button>
                                        <Button 
                                            theme="primary"
                                            outline 
                                            onClick={()=>{setCurrentTaskView(false)}}>
                                            Day
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </Col>
                        </Row>
                        {
                            currentTaskView 
                            ?<Fade in={true}>
                                <Row>
                                    <Col sm="8" lg="12"> 
                                        <CurrentTask 
                                            currentTask = {props.tasks[0]}
                                            handleTaskDeletion={props.handleTaskDeletion}
                                            handleTaskClick={props.handleTaskClick}
                                        />
                                    </Col> 
                                </Row>
                            </Fade>
                            : <TasksToday {...props} />
                        }
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