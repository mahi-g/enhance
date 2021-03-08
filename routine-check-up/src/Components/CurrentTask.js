import React from 'react';
//import { Button, Card, CardFooter, CardHeader } from 'shards-react';
import Card from '../components/Card';
import { 
    Button,
    ButtonGroup,
    Category,
    Group
} from './styledComponents'

const CurrentTask = (props) => {
    const handleDelete = (e) => {
        e.preventDefault();
        props.handleTaskDeletion(currentTask.id);
    }
    const { currentTask, topTask } = props;

    const footer = ( topTask &&
            <>
                <p>Did you complete this task?</p>
                <ButtonGroup>
                    <Button onClick={props.handleTaskClick}>Yes</Button>
                    <Button onClick={handleDelete}>No</Button>
                </ButtonGroup>
            </>
        );

    const body = (
            <>
                { currentTask.description&&<div>{currentTask.description}</div> }
                <Group>
                    <Category>4:00 - 4:30 pm</Category>
                    { 
                        currentTask.category&&
                        <Category>{currentTask.category}</Category>
                    }
                    {props.edit&&<Button>Edit</Button>}
                </Group>
            </>
        );

    return(
        <Card 
            header = {currentTask.name ||"Add task to get started"}
            body = {body}
            footer = { footer || ''}
            height = {props.height || '150' }
            width = "400"
            headerHeight = {props.headerHeight || '40' }
            bodyHeight = {props.bodyHeight || '110' }
            background = {props.background || '' }
            borderBottom = {props.borderBottom || '' }
            borderTop = {props.borderTop || '' }

        />

    );
}

export default CurrentTask;
//"#C8E3D9FF"
//"#8FD4BC"