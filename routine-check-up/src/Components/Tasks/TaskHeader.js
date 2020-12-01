import React from 'react';
import { Button } from 'shards-react';
import Divider from "../Divider";

const header = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const TaskHeader = () => {
    return(
        <div style={{marginTop:"16px"}}>
            <div style={header}>
                <h2>Your Routine</h2>
                <Button pill
                        size="sm"
                        theme="success"
                        style={{color:"black"}}
                >
                    <strong>+ Add a task</strong>
                </Button>
            </div>
            <Divider/>
        </div>


    );
};


export default TaskHeader;
