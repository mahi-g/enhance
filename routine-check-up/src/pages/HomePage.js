import React, { useState } from 'react'
import { 
    Button, 
    ButtonGroup, 
    Col, 
    Card, 
    Fade,
    Row 
} from 'shards-react'
import AddTask from '../Components/AddTask'
import CurrentTask from '../Components/CurrentTask'
import Header from '../Components/Header'
import TasksToday from '../Components/TasksToday'
import CategoryBarChart from '../Components/Charts/BarChart'
import CircleChart from '../Components/Charts/CircleChart'
import RecentActivities from '../Components/RecentActivities'

const col = {
    minHeight: '90vh',
    height: '100%',
    borderRight: '2px solid #e6ecf7'
}

const HomePage = (props) => {
    const [currentTaskView, setCurrentTaskView] = useState(true);
    
    return(
            <Row>
                <Col sm={{size: 10, order: 12}}  lg="5">
                        <Row> 
                            <Col style={{ display:'flex', justifyContent:'space-between', marginTop:"5%", marginBottom:"5%" }}>
                                <div>
                                    <Header headerText="Tasks"/>
                                    <p>Tue February 2</p>
                                </div>
                                <AddTask handleAddTask={props.handleAddTask}/>
                            </Col>
                        </Row>
                        <Fade in={true}>
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
                            <TasksToday {...props} />
                        
                </Col>

                <Col sm={{size: 10, order: 1 }} lg="3" style={col}>
                    <br/>
                    <Header headerText="Your Progress"/>
                    <Row>
                        <Col>
                            <Card 
                                style={
                                    {
                                        boxShadow: 'none',
                                        background: '#c8e3d9ff'
                                    }
                                }
                            >
                                <CircleChart/>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Card
                                style={
                                    {
                                        boxShadow: 'none',
                                        background: '#c8e3d9ff'
                                    }
                                }    
                            >
                                <CategoryBarChart/>
                            </Card>
                        </Col>
                    </Row>
                    
                </Col>
        
               
                <Col sm="10" lg={{size: 4, order: 12}}>
                        <Row>
                            <Col>
                                <h3>"</h3>
                                <p>To finish what you started, start what you need to finish</p>
                                <h3>"</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <Header headerText={'See what your friends are up to?'} />
                                    <Button>Activities</Button>
                                </Card>
                            </Col>
                        </Row>
                </Col>
            </Row>
    )
}

export default HomePage;