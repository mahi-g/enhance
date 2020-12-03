import React, { useState } from "react";
import { Button, Form, FormInput, FormGroup, FormTextarea, Modal, ModalBody, ModalHeader } from "shards-react";

const ModalForm = (props) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const forms = (e) => {
        e.preventDefault();
        toggle();
        let i = 0;
        let formData = {}
        while(i !== e.target.length-1){
            const {name,value} = e.target[i];
            formData[name]=value;
            i++;
        }
        console.log(props);
        console.log(formData);

        props.handleAddTask(formData);

    }


    return (
      <div>
        <Button 
            pill
            size="sm"
            theme="success"
            style={{color:"black"}}
            onClick={toggle}
        >
            <strong>+ Add a task</strong>
        </Button>
        <Modal open={open} toggle={toggle}>
          <ModalHeader>Add a task</ModalHeader>
          <ModalBody>
            <Form onSubmit={forms}>
                <FormGroup>
                    <label htmlFor="#taskname">Task Name</label>
                    <FormInput id="#taskname" name="name" placeholder="Task Name" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#description">Password</label>
                    <FormTextarea type="description" name="description" id="#description" placeholder="Task Description" />
                </FormGroup>
                <Button
                    pill
                    size="sm"
                    theme="success"
                    style={{color:"black"}}
                    type="submit"
                > 
                    Add
                </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }


  export default ModalForm;