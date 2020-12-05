import React from 'react'
import CurrentTask from './CurrentTask'
import { Col, Fade, Row } from 'shards-react'


const TasksToday = (props) => {     
    const { tasks } = props;

    const tasksForToday = tasks.map((task) => {
        console.log(task);
        return(
            <Fade in={true}>
                <Row>
                    <Col sm="8" lg="12">
                        <CurrentTask 
                            currentTask = {task}
                            handleTaskDeletion={props.handleTaskDeletion}
                            handleTaskClick={props.handleTaskClick}
                            handleAddTask={props.handleAddTask}
                        />
                    </Col>
                </Row>
            </Fade>
        );
    });
    console.log(tasksForToday);
    return(
        <>
            {tasksForToday}
        </>
    );
}

export default TasksToday;