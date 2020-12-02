import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, ButtonGroup, FormRadio } from 'shards-react';

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', "Fr", 'Sa'];

const card = {
    background: '#727a83',
    border: '1px solid #333333',
    marginBottom:"16px"
}

const Task = (props) => {
    const buttons = days.map((day) => <Button theme="secondary">{day}</Button>)

    return(
        <Card fluid style={card} className="text-white">
            <CardBody>
                <div style={{display:'flex', justifyContent: 'space-between'}}>
                    <CardTitle className="text-secondary">
                        Task #{props.taskKey}: {props.taskName || "Task Name"}
                    </CardTitle>
                    <FormRadio inline onClick={()=>(console.log("Clicked!"))} />
                </div>
                <CardSubtitle className="text-muted">Add task description here. Add task description here. Add task description here. Add task description here. Add task description here</CardSubtitle>
                <ButtonGroup>
                    {buttons}
                </ButtonGroup>
            </CardBody>
        </Card>
    );
}

export default Task;
