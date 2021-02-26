import React from 'react';
//import { Button, Card, CardFooter, CardHeader } from 'shards-react';
import Card from '../components/Card';
import styled from 'styled-components';

const Button = styled.button`
    font-size: 10px;
    height: 24px;
    min-width: 58px; 
    background: #8BA1DB;
    border-radius: 14px;
    color: white;
    border: none;
    margin: 0 5px;
    @media (max-width: 453px) {
        min-width: 48px;
        margin: 0 2px;
`
const ButtonGroup = styled.div`
    min-width: 120px
    @media (max-width: 453px) {
        min-width: 100px;
`

const Category = styled.div`
    height: 22px;
    width: 84px;
    background: #8FD4BC;
    font-weight: 500;
    font-size: 10px;
    border-radius: 4px;
    text-align: center;
    padding: 4px;
    margin-top: 10px;
    margin-right: 5px;
`;
const Group = styled.div`
    display: flex;
`;

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