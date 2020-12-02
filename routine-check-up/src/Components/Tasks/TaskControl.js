import React from 'react'
import TaskHeader from './TaskHeader'
import Task from './Task'
import { Col, Row } from "shards-react";

const tasks = ['Task One', 'Task Two'];


const TaskControl = () => {

    const viewTasks = tasks.map((task, index) => {
        return (
            <Row>
                <Col sm={{size: 6, offset: 3}} >
                    <Task taskName={task} taskKey={index+1}/>
                </Col>
            </Row>
        )
    });

    return(
        <>
            <Row>
                <Col sm={{size: 6, offset: 3}} >
                    <TaskHeader />
                </Col>
            </Row>
            {viewTasks}
        </>
    );
}

export default TaskControl;
