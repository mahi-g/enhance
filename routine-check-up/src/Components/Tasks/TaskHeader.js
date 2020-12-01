import React from 'react';
import { Button } from 'shards-react';

const header = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const TaskHeader = () => {
    return(
        <div style={header}>
            <h2>Your Routine</h2>
            <Button pill theme="light">Add a task</Button>
        </div>
    );
};


export default TaskHeader;