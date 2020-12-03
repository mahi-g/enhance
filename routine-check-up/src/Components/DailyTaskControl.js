import React from 'react'
import DailyTaskHeader from './DailyTasksHeader'
import DailyTask from './DailyTasks'
import { Col, Row } from "shards-react";


const DailyTaskControl = (props) => {
    console.log("2: ", props)
    return(
        <>
            <Row>
                <Col sm={{size: 6, offset: 3}} >
                    <DailyTaskHeader handleAddTask={props.handleAddTask} />
                </Col>
            </Row>

            <Row>
                <Col sm={{size: 6, offset: 3}} >
                    <DailyTask 
                        currentTask = {props.tasks[0]}
                        handleTaskDeletion={props.handleTaskDeletion}
                        handleTaskClick={props.handleTaskClick}
                    />
                </Col>
            </Row>
            
        </>
    );
}

export default DailyTaskControl;
