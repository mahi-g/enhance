import React from 'react';
import { Card, CardBody, CardFooter,   CardHeader, CardTitle, CardSubtitle } from 'shards-react';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdDone, MdDelete } from 'react-icons/md';

const card = {
    marginTop: "5%",
    boxShadow: 'none',
}
const cardHeader = {
    borderBottom: '1px solid #f0f3f7',
    background:"#ffffff",
}
const cardFooter = {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #f0f3f7',
    background:"#ffffff",
    paddingBottom: "0"
}
const cardBody = {
    background: "#fafbff",
}
const category = {
    background: '#f0f3fa',
    fontWeight: 'bold',
    fontSize: '.7em',
    padding: "2%",
    borderRadius: '3px'
}

const CurrentTask = (props) => {

    const handleDelete = (e) => {
        e.preventDefault();
        props.handleTaskDeletion(currentTask.id);
    }

    const { currentTask } = props;
    console.log("TaskToday ", props);
    return(
        <Card style={ card }>
            <CardHeader style={ cardHeader }>{ currentTask.name ||"Add task to get started"}</CardHeader>    
            { currentTask.description 
              && <CardBody style={cardBody}> {currentTask.description} </CardBody> 
            }
            <CardFooter style={ cardFooter }>
                <p style={ category }>{currentTask.category}</p>
                <div style={ {display:'flex', flex:'column', justifyContent:'space-around'} }>
                    <div onClick={ props.handleTaskClick }>
                        <MdDone size={20} />
                    </div>
                    <div onClick={ handleDelete }>
                        <MdDelete size={20} />
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default CurrentTask;
