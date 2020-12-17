import React, { useState } from "react";
import { 
    Button, 
    Form, 
    FormInput, 
    FormGroup, 
    FormTextarea, 
    Modal, 
    ModalBody, 
    ModalHeader 
} from "shards-react";

import book from '../../assets/book.svg';
import bubble from '../../assets/bubble.svg';
import cup from '../../assets/cup.svg';
import guitar from '../../assets/guitar.svg';
import running from '../../assets/running.svg';
import shampoo from '../../assets/shampoo.svg';
import './style.css';

const ModalForm = (props) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({});
    const [steps, setSteps] = useState(1);


    const toggle = () => setOpen(!open);

    const forms = (e) => {
        e.preventDefault();
        toggle();
       
        //console.log(formData);

        if(formData.hasOwnProperty('name')){
            props.handleAddTask(formData);
            setFormData({});
            setSteps(1);
        }

    }

    const handleChange = (e) => {
        e.preventDefault();
        let { name, value } = e.target;

        if(steps === 1) {
            name = e.target.name;
            value = e.target.alt;
        }
    
        let form = formData;
        form[name] = value;
        setFormData(form) ;
        console.log(formData);
    } 

    const handleNext = (e) => {
        e.preventDefault();
        if(steps < 4) setSteps(steps+1);

    }

    const handlePrevious = (e) => {
        e.preventDefault();
        if(steps > 1) setSteps(steps-1);
    }


    return (
      <div>
        <Button 
            pill
            size="sm"
            theme="primary"
            onClick={toggle}
        >
            <strong>+ Add a task</strong>
        </Button>

        <Modal open={open} toggle={toggle}>
          <ModalHeader>Add a task</ModalHeader>
            <ModalBody>
                <Form onSubmit={forms}>
                    { 
                        steps === 1 
                        ? <ChooseCategory handleChange={ handleChange }/> : steps === 2 
                        ? <TaskName handleChange={ handleChange } /> : steps === 3
                        ? <Description handleChange={ handleChange }/> : <p>component pending</p>
                    }
                    {
                        steps <= 3 
                        ? <div className="center-btn">
                            <Button 
                                outline
                                pill 
                                size="sm"
                                theme="primary"
                                onClick={ handlePrevious } >
                                Previous
                            </Button> 
                            <Button 
                                pill 
                                size="sm"
                                theme="primary"
                                onClick={ handleNext } >
                                Next
                            </Button>
                          </div>
                        : <Button 
                            pill 
                            size="sm"
                            theme="primary" 
                            type="submit">
                            Add
                          </Button>
                    }
                </Form>
            </ModalBody>
        </Modal>
      </div>
    );
  }

const ChooseCategory = (props) => {
    return (
        <FormGroup>
            <button className="category-btn">
                <img src={bubble} alt="Cleaning" name="category" onClick={props.handleChange} /> 
                <p>Cleaning</p>
            </button>
            <button className="category-btn">
                <img src={cup} alt="Work" name="category" onClick={props.handleChange} />
                <p>Work</p>
            </button>
            <button className="category-btn">
                <img src={guitar} alt="Hobbies" name="category" onClick={props.handleChange} />
                <p>Hobbies</p>
            </button>
            <button className="category-btn">
                <img src={book} alt="Reading" name="category" onClick={props.handleChange} />
                <p>Reading</p>
            </button>
            <button className="category-btn">
                <img src={shampoo} alt="Selfcare" name="category" onClick={props.handleChange} />
                <p>Self-care</p>
            </button>
            <button className="category-btn">
                <img src={running} alt="Fitness" name="category" onClick={props.handleChange} />
                <p>Fitness</p>
            </button>
        </FormGroup>
    );
}

const TaskName = (props) => {
    return (
        <FormGroup>
            <label htmlFor="#taskname">Task Name</label>
            <FormInput id="#taskname" name="name" onChange={ props.handleChange }/>
        </FormGroup>
    )
}

const Description = (props) => {
    return (
        <FormGroup>
            <label htmlFor="#description">Description</label>
            <FormTextarea name="description" id="#description" onChange={ props.handleChange }/>
        </FormGroup>
    )
}


export default ModalForm;
