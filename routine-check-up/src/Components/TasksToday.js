import React from 'react'
import CurrentTask from './CurrentTask'
import { Col, Fade, Row } from 'shards-react'

const data = [
    {   category: "Reading",
        description: "Take notes and highlight important parts of the book",
        id: 0,
        name: "Read chapter 3",
       },
     {   category: "Hobbies",
        description: "Take notes and highlight important parts of the book. Take notes and highlight important parts of the book. Take notes and highlight important parts of the book",
        id: 1,
        name: "Go biking in the park"
       },
     {  category: "Fitness",
        description: "",
        id: 2,
        name: "10 min situps"
       },
    ];

const TasksToday = (props) => {     
    const tasks = data;

    const tasksForToday = tasks.map((task) => {
        return(
            <Fade in={true}>
                <Row>
                    <Col sm="8" lg="12">
                        <CurrentTask 
                            currentTask = {task}
                            handleTaskDeletion={props.handleTaskDeletion}
                            handleTaskClick={props.handleTaskClick}
                            handleAddTask={props.handleAddTask}
                            bodyHeight = "110"
                            height = "150"
                            borderTop = "#F4F4F4"
                        />
                    </Col>
                </Row>
            </Fade>
        );
    });
    return(
        <>
            {tasksForToday}
        </>
    );
}

export default TasksToday;