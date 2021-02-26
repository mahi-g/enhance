import React from 'react'
import { 
    Button, 
    //Card,
    Col, 
    Fade,
    Row 
} from 'shards-react'
import AddTask from '../components/AddTask'
import CategoryBarChart from '../components/Charts/CategoryBarChart'
import CircleChart from '../components/Charts/CircleChart'
import CurrentTask from '../components/CurrentTask'
import Header from '../components/Header'
import RandomQuote from '../components/RandomQuote'
import TasksToday from '../components/TasksToday'


import friends from '../assets/friends.svg'

const col = {
    minHeight: '90vh',
    height: '100%',
    borderRight: '2px solid #e6ecf7'
}

const data = [
    {   category: "Reading",
        description: "Take notes and highlight important parts of the book",
        id: 0,
        name: "Read chapter 3",
       },
     {   category: "Hobbies",
        description: "Take notes and highlight important parts of the book",
        id: 1,
        name: "Go biking in the park"
       },
     {  category: "Fitness",
        description: "",
        id: 2,
        name: "10 min situps"
       },
    ];

    
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

const Home = (props) => {
    const date = new Date();   
    const day = days[date.getDay()];
    const month = months[date.getMonth()];


    return(
            <Row>
                <Col sm={{size: 10, order: 12}}  lg="6">
                        <Row> 
                            <Col style={{ display:'flex', justifyContent:'space-between', marginTop:'5%'}}>
                                <div>
                                    <Header headerText="Tasks"/>
                                    <div>{day}, {month} {date.getDate()}</div>
                                </div>
                                <AddTask handleAddTask={props.handleAddTask}/>
                            </Col>
                        </Row>
                        <Fade in={true}>
                                <Row>
                                    <Col sm="8" lg="12"> 
                                        <CurrentTask 
                                            topTask = {true}
                                            currentTask = {data[0]}
                                            handleTaskDeletion={props.handleTaskDeletion}
                                            handleTaskClick={props.handleTaskClick}
                                            bodyHeight = "100"
                                            height = "160"
                                            background = "#C8E3D9FF"
                                            borderBottom = "#8FD4BC"
                                        />
                                    </Col> 
                                </Row>
                            </Fade>
                            <TasksToday {...props} />
                </Col>
                <Col sm={{size: 10, order: 1 }} lg="3" style={col}>
                    <Row>
                        <Col  style={{ marginTop:"10%", marginBottom:"13%" }}>
                            <Header headerText="Your Progress" position="center"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CategoryBarChart/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <CircleChart/> 
                        </Col>
                    </Row>
                    
                </Col>
                <Col sm="10" lg={{size: 3, order: 12}} style={{background:"#fff", borderRadius:'15px', marginTop: '2%'}}>
                        <Row >
                            <Col>
                                <RandomQuote/>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{marginTop: '5%'}}>
                                <div>
                                    <Header headerText={'See what your friends are up to?'} size='36px'/>
                                    <Button pill style={{marginTop:"36px", width:'200px'}} className="button">Activities</Button>
                                    <img 
                                        style={
                                            {width:"20vw", height:"30vh", display: 'block'}
                                        } 
                                        alt="friends" 
                                        src={friends}
                                    />
                                </div>
                            </Col>
                        </Row>
                </Col>
            </Row>
    )
}

export default Home;