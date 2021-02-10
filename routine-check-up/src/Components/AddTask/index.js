import React from "react";
import { 
    Button, 
    FormCheckbox, 
    FormInput, 
    FormGroup,
    FormTextarea, 
    Modal, 
    ModalBody, 
    ModalFooter,
    ModalHeader,
} from "shards-react";

// import book from '../../assets/book.svg';
// import bubble from '../../assets/bubble.svg';
// import cup from '../../assets/cup.svg';
// import guitar from '../../assets/guitar.svg';
// import running from '../../assets/running.svg';
// import shampoo from '../../assets/shampoo.svg';
import cleaning from '../../assets/icons/cleaning.svg';
import selfcare from '../../assets/icons/selfcare.svg';
import fitness from '../../assets/icons/fitness.svg';
import reading from '../../assets/icons/reading.svg';
import hobby from '../../assets/icons/hobby.svg';
import work from '../../assets/icons/work.svg';

import './style.css';

class AddTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            steps: 1,
            days: [true, true, true, true, true, true, true],
            name: '',
            description: '',
            error: false
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
            this.setState({ steps: 1, name: '', description: '', days: [false, false, false, false, false, false, false]});
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
            const currState = prev.days;
            currState[i] = !currState[i];
            return ({[name]: [...currState]});
        });
    }

    handleNext(e){
        e.preventDefault();
        if(this.state.steps === 2 && this.state.name === ''){
            this.setState({error:true})
        }
        else if(this.state.steps < 4) {
            this.setState( prev => {
                return { steps: prev.steps+1, error: false }
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
                    className="button"
                    onClick={this.toggle}>
                    + Add a task
                </Button>

                <Modal open={this.state.open} toggle={this.toggle}>
                    <ModalHeader>
                        <p>Add a task</p>
                        <p>Step {this.state.steps}</p>
                    </ModalHeader>
                    <ModalBody style={{height:'60vh'}}>
                                {
                                    this.state.steps === 1 
                                    ? <ChooseCategory handleChange={this.handleChange} /> : this.state.steps === 2 
                                    ? <TaskName handleChange={this.handleChange} error = {this.state.error} name={this.state.name} description={this.state.description}/> : this.state.steps === 3
                                    ? <Description handleChange={this.handleChange} description={this.state.description}/> 
                                    : <PickDates handleChange={this.handleChange} handleDaySelection={this.handleDaySelection} days={this.state.days} />
                                }
                    </ModalBody>

                    <ModalFooter>
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
                                ? 
                                <Button 
                                    pill 
                                    size="sm"
                                    theme="primary" 
                                    onClick={this.handleNext}>
                                    Next
                                </Button> 
                                : 
                                <Button 
                                    pill 
                                    size="sm"
                                    theme="primary" 
                                    type="submit"
                                    onClick={this.formSubmit}>
                                    Add
                                </Button>
                            }
                    </ModalFooter>

                </Modal>
            </div>
        );
    }
  }

const ChooseCategory = (props) => {
    return (
        <FormGroup style={{display: 'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
            <div outline className="category-btn">
                <div className="center-img">
                    <img src={cleaning} alt="Cleaning" name="category" onClick={props.handleChange} /> 
                    <p>Cleaning</p>
                </div>
            </div>
            <div outline className="category-btn">
                
                <div className="center-img">
                    <img src={work} alt="Work" name="category" onClick={props.handleChange} />
                    <p>Work</p>
                </div>
            </div>
            <div outline className="category-btn">
                <div className="center-img">
                    <img src={hobby} alt="Hobbies" name="category" onClick={props.handleChange} />
                    <p>Hobbies</p>
                </div>
            </div>
            <div outline className="category-btn">
                <div className="center-img">
                    <img src={reading} alt="Reading" name="category" onClick={props.handleChange} />
                    <p>Reading</p>
                </div>

            </div>
            <div outline className="category-btn">
                <div className="center-img">
                    <img src={selfcare} alt="Selfcare" name="category" onClick={props.handleChange} />
                    <p>Self-care</p>
                </div>
            </div>
            <div  outline className="category-btn">
                <div className="center-img">
                    <img src={fitness} alt="Fitness" name="category" onClick={props.handleChange} />
                    <p>Fitness</p>
                </div>
            </div>
        </FormGroup>
    );
}

const TaskName = ({ name, description, error, handleChange }) => {
    return (
        <FormGroup>
            <label htmlFor="#taskname">Task Name</label>
            <FormInput id="#taskname" name="name" type ="text" value={name} onChange={ handleChange }/>
            { error && <p className="error-msg">Task name is required!</p> }
            <label htmlFor="#description">Description</label> 
            <FormTextarea name="description" id="#description" value={description} onChange={handleChange }/>
        </FormGroup>
    )
}

const Description = ({ description, handleChange }) => {
    return (
        <FormGroup>
            <label htmlFor="#description">Description</label> 
            <FormTextarea name="description" id="#description" value={description} onChange={handleChange}/>
        </FormGroup>
    )
}

const PickDates = (props) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const radioForms = days.map((day, i) => {
        return ( 
                <FormCheckbox 
                    key={props.days[i]}
                    checked={props.days[i]} 
                    onChange={ (e) => props.handleDaySelection(e, i, "days") }>
                    {day}
                </FormCheckbox>
        )
    });
    return (
        <FormGroup>
            <label>Select the days you are completing this routine</label> 
            <div style={{display:'flex', justifyContent:'space-around', flexWrap: 'wrap'}}>
                {radioForms}
            </div>

            <div>
                <label>Start</label> 
                <FormInput name="starttime" type="time" onChange={props.handleChange}></FormInput>
            </div>
            <div>
                <label>End</label> 
                <FormInput name="endtime" type="number" onChange={props.handleChange}></FormInput>
            </div>
        </FormGroup>
    )
}


export default AddTask;
