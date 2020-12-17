import React from 'react';
import Divider from "./Divider";
import ModalForm from "./AddTask/ModalForm"
const header = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const DailyTaskHeader = (props) => {
    return(
        <div style={{marginTop:"16px"}}>
            <div style={header}>
                <h2>Today's Routine</h2>
                <ModalForm handleAddTask={props.handleAddTask}/>
            </div>
            <Divider/>
        </div>


    );
};


export default DailyTaskHeader;
