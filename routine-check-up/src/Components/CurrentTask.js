import React from 'react';
import { Button, Card, CardFooter, CardHeader } from 'shards-react';

const card = {
    marginTop: "5%",
    boxShadow: 'none',
    maxWidth: '500px',
}
const cardHeader = {
    background: '#fff',
    borderRadius: '0.67rem',
}
const cardFooter = {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #f0f3f7',
    paddingBottom: "0",
    background: '#fff'
}

const category = {
    width: '75px',
    height: '30px',
    background: '#f0f3fa',
    fontWeight: 'bold',
    fontSize: '.7em',
    borderRadius: '3px',
    textAlign: 'center',
    paddingTop: '7px',
    marginTop: '10px'
}

const btns = {
    margin: '0 25px'
}


const CurrentTask = (props) => {

    const handleDelete = (e) => {
        e.preventDefault();
        props.handleTaskDeletion(currentTask.id);
    }

    const { currentTask, topTask } = props;
    console.log("TaskToday ", props);
    return(
        <Card style={ card }>
            <CardHeader style={ cardHeader }>
                <h6>{currentTask.name ||"Add task to get started"}</h6>
                {
                    currentTask.description&&<div>{currentTask.description}</div> 
                }
                { 
                    currentTask.category&&<div style={category}>{currentTask.category}</div> 
                } 
            </CardHeader>
            {
                topTask&&
                <CardFooter style={cardFooter}>
                    <div 
                        style={ 
                            {
                                display:'flex', 
                                flex:'column', 
                                justifyContent:'space-around', 
                                alignItems: 'center'
                            } 
                        }
                    >
                        Did you complete this task?
                        <Button 
                            pill                                     
                            size="sm"
                            style={btns}
                            onClick={props.handleTaskClick}
                        >
                            Yes 
                        </Button>
                        <Button 
                            outline 
                            pill
                            size="sm"
                            onClick={handleDelete}
                        >
                            No 
                        </Button>
                    </div>
                </CardFooter>
            }
        </Card>
    );
}

export default CurrentTask;
