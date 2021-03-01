import React from 'react';
import styled from 'styled-components';
import { ButtonGroup } from '../styledComponents';
import Header from '../Header';
import TasksToday from '../TasksToday'
const Day = styled.button`
    font-weight: 400;
    padding: 5px;
    margin: 0 8px;
    height: 30px;
    width: 75px;
    background: ${ props => props.background ? props.background : '#FFFFFF'};
    border-radius: 18px;
    border: none;
    &:focus {
        outline: none;
        background: #8BA1DB;
    }
    &:active {
        outline: none;
        border: 2px solid #8BA1DB;
        padding: 3px;
    }
`;
const ManageTasks = () => {
    const days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayList = days.map(day => (
        <Day>{day}</Day>
    ));
    return(
        <>
            <Header headerText="Manage Tasks" />
            <ButtonGroup>
                {dayList}
            </ButtonGroup>
            <TasksToday />
        </>
    )
}

export default ManageTasks;