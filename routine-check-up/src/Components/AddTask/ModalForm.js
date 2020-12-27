import React from "react";
import { 
    Button, 
    Form, 
    FormCheckbox, 
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

class ModalForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            steps: 1,
            days: [false, false, false, false, false, false, false],
            name: '',
            description: '',
        }
        this.toggle = this.toggle.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDaySelection = this.handleDaySelection.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);



    }

    toggle() {
        this.setState( prev => { 
            return {open: !prev.open }
        });
    }

    formSubmit(e){
        e.preventDefault();
        this.toggle();
        if(this.state.hasOwnProperty('name')){
            this.props.handleAddTask(this.state);
            this.setState({ steps: 1, name: ''});
        }
    }

    handleChange(e){
        e.preventDefault();
        let { name, value } = e.target;
        if(this.state.steps === 1) {
            name = e.target.name;
            value = e.target.alt;
        }
    
        let form = this.state;
        form[name] = value;
        console.log(form);
        this.setState({form});
        console.log(this.state);
    }
    
    handleDaySelection(e, i, name){
        e.preventDefault();
        console.log(i, name);
        this.setState( prev => { 
            const currState = [...prev[name]];
            currState[i] = !currState[i];
            return ({[name]: currState});
        });
    }

    handleNext(e){
        e.preventDefault();
        if(this.state.steps < 4) {
            this.setState( prev => {
                return { steps: prev.steps+1 }
            });
        }
    }

    handlePrevious(e){
        e.preventDefault();
        if(this.state.steps > 1) {
            this.setState( prev => {
                return { steps: prev.steps-1 }
            });
        }
    }

   

    render(){
        return (
            <div>
                <Button 
                    pill
                    size="sm"
                    theme="primary"
                    onClick={this.toggle}>
                    <strong>+ Add a task</strong>
                </Button>

                <Modal open={this.state.open} toggle={this.toggle}>
                <ModalHeader>Add a task <p>Step {this.state.steps}</p></ModalHeader>
                    <ModalBody>
                                {
                                    this.state.steps === 1 
                                    ? <ChooseCategory handleChange={this.handleChange} /> : this.state.steps === 2 
                                    ? <TaskName handleChange={this.handleChange} name={this.state.name} /> : this.state.steps === 3
                                    ? <Description handleChange={this.handleChange} description={this.state.description}/> 
                                    : <PickDates handleDaySelection={this.handleDaySelection} days={this.state.days} />
                                }
                                <Button 
                                    outline
                                    pill 
                                    size="sm"
                                    theme="primary"
                                    onClick={this.handlePrevious} >
                                    Previous
                                </Button> 
                            {
                                this.state.steps <= 3 
                                ? <Button 
                                    pill 
                                    size="sm"
                                    theme="primary"
                                    onClick={this.handleNext} >
                                    Next
                                </Button>
                                : <Button 
                                    pill 
                                    size="sm"
                                    theme="primary" 
                                    type="submit"
                                    onClick={this.formSubmit}>
                                    Add
                                </Button>
                            }
                    </ModalBody>
                </Modal>
            </div>
        );
    }
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

const TaskName = ({ name, handleChange }) => {
    return (
        <FormGroup>
            <label htmlFor="#taskname">Task Name</label>
            <FormInput id="#taskname" name="name" type ="text" value={name} onChange={ handleChange }/>
        </FormGroup>
    )
}

const Description = ({ description, handleChange }) => {
    return (
        <FormGroup>
            <label htmlFor="#description">Description</label> 
            <FormTextarea name="description" id="#description" value={description} onChange={handleChange }/>
        </FormGroup>
    )
}

const PickDates = (props) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const radioForms = days.map((day, i) => {
        return ( 
            <div>
                <FormCheckbox 
                    key={props.days[i]}
                    checked={props.days[i]} 
                    onChange={ (e) => props.handleDaySelection(e, i, "days") }>
                    {day}
                </FormCheckbox>
            </ div>
        )
    });
    return (
        <FormGroup>
            <label>Select the days you're completing this routine</label> 
            <div>
                {radioForms}
            </div>
        </FormGroup>
    )
}


export default ModalForm;
