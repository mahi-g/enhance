import React from 'react';
import { Card, CardBody, CardFooter,   CardHeader, CardTitle, CardSubtitle } from 'shards-react';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';

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

const CurrentTask = (props) => {

    const handleDelete = (e) => {
        e.preventDefault();
        props.handleTaskDeletion(tasks[0].id);
    }

    const { tasks } = props;
    console.log("TaskToday ", props);
    return(
        <Card>
            <CardHeader style={cardHeader}>{tasks[0].id || ""}: { tasks[0].name ||"Add task to get started"}</CardHeader>    
            { tasks[0].description && <CardBody style={cardBody}>
                                            {tasks[0].description}
                                        </CardBody> 
            }
            <CardFooter style={ cardFooter }>
                <p>Reading</p>
                <div style={{display:'flex', flex:'column'}}>
                    <div onClick={ props.handleTaskClick }>
                        <AiOutlineCheckCircle />
                    </div>
                    <div onClick={ handleDelete }>
                        <AiOutlineCloseCircle />
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default CurrentTask;
