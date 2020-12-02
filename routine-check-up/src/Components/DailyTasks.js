import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'shards-react';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';


const card = {
    background: '#727a83',
    border: '1px solid #333333',
    marginBottom:"16px"
}

const layout = {
    display: 'flex',
    justifyContent: 'space-between'
}


const DailyTask = (props) => {
    console.log(props);
    const { currentTask } = props;
    console.log(currentTask);

    const handleDelete = (e) => {
        e.preventDefault();
        props.handleTaskDeletion(currentTask.id);
    }

    return(
        <Card fluid style={card} className="text-white">
            <CardBody style={layout}>
                <div>
                    <div style={{ display:'flex', justifyContent: 'space-between' }}>
                        <CardTitle className="text-secondary">
                            Task #{ currentTask.id || "" }: { currentTask.name || "Add task to get started"}
                        </CardTitle>
                    </div>
                    <CardSubtitle className="text-muted">{ currentTask.description }</CardSubtitle>
                    
                </div>
                <div>
                    <div onClick={ props.handleTaskClick }>
                        <AiOutlineCheckCircle />
                    </div>
                    <div onClick={ handleDelete }>
                        <AiOutlineCloseCircle />
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default DailyTask;
