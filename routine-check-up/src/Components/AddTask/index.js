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

import cleaning from '../../assets/icons/cleaning.svg';
import selfcare from '../../assets/icons/selfcare.svg';
import fitness from '../../assets/icons/fitness.svg';
import reading from '../../assets/icons/reading.svg';
import hobby from '../../assets/icons/hobby.svg';
import work from '../../assets/icons/work.svg';

import './style.css';
import styled from 'styled-components';

const RadioButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap; 
    height: 120px;
    margin: 24px 0;
    & > * {
        margin: 8px 10px 8px 0;
        height: 24px;
    }
`;
const Label = styled.label`
    margin: 16px 0 8px 0;
    font-weight: 500;
`;

const StyledFormInput = styled(FormInput)`
    border: 0.5px solid #c4c4c4;
`;
const StyledTextArea = styled(FormTextarea)`
    border: 0.5px solid #c4c4c4;
`;

class AddTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            steps: 1,
            days: [true, true, true, true, true, true, true],
            name: '',
            description: '',
            error: false,
            startTime: '10:00',
            endTime: '10:30'
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
            const {name, description, days, startTime, endTime} = this.state;
            this.props.handleAddTask({name, description, days, startTime, endTime});
            this.setState({ 
                steps: 1, 
                name: '', 
                description: '', 
                days: [false, false, false, false, false, false, false], 
                startTime: '10:00',
                endTime: '10:30'
            });
        }
    }

    handleChange(e){
        e.preventDefault();
        let { name, value } = e.target;

        //inputs for step 1 
        if(this.state.steps === 1) {
            name = e.target.name;
            value = e.target.alt;
        }
    
        let form = this.state;
        form[name] = value;
        this.setState({...form});
    }
    
    handleDaySelection(i, name){
        const currState = this.state.days;
        currState[i] = !currState[i];
        this.setState({[name]: [...currState]});
    }

    handleNext(e){
        e.preventDefault();
        if(this.state.steps === 2 && this.state.name === ''){
            this.setState({error:true})
        }
        else if(this.state.steps < 3) {
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
        const { name, description, days, startTime, endTime, error, steps, open } = this.state;
        return (
            <div>
                <Button 
                    pill
                    size="sm"
                    className="button"
                    onClick={this.toggle}>
                    + Add a task
                </Button>
                <Modal size="md" open={open} toggle={this.toggle}>
                    <ModalHeader>
                        <p>Add a task</p>
                        <span><p style={{fontWeight:'300', fontSize:'14px', paddingTop:'5px'}}>Step {this.state.steps}</p></span>
                    </ModalHeader>
                    <ModalBody style={{height:'55vh'}}>
                    {
                        steps === 1 
                        ? <ChooseCategory handleChange={this.handleChange} /> 
                        : steps === 2 
                        ? <TaskName 
                            handleChange={this.handleChange} 
                            error = {error} 
                            name={name} 
                            description={description}
                            />
                        : <PickDates 
                            handleChange={this.handleChange} 
                            handleDaySelection={this.handleDaySelection} 
                            days={days} 
                            startTime = {startTime}
                            endTime = {endTime}
                            />
                    }
                    </ModalBody>
                    <ModalFooter>
                        <Button 
                            outline
                            pill 
                            size="sm"
                            onClick={this.handlePrevious} 
                            style={{marginRight: '65%', color: "#333", border:"1px solid #8FD4BC"}}
                            >
                            Prev
                        </Button> 
                        {
                            steps <= 2 
                            ? 
                            <Button 
                                pill 
                                size="sm"
                                theme="primary" 
                                onClick={this.handleNext}
                                style={{background:"#8FD4BC", color: "#333", border:"1px solid #8FD4BC"}}
                                >
                                Next
                            </Button>
                            : 
                            <Button 
                                pill 
                                size="sm"
                                theme="primary" 
                                type="submit"
                                onClick={this.formSubmit}
                                style={{background:"#8FD4BC", color: "#333", border:"1px solid #8FD4BC"}}
                                >
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

const TaskName = ({ 
    name, 
    description, 
    error, 
    handleChange 
}) => {
    return (
        <FormGroup>
            <Label htmlFor="#taskname">Task Name</Label>
            <StyledFormInput id="#taskname" name="name" type ="text" value={name} onChange={ handleChange }/>
            { error && <p className="error-msg">Task name is required!</p> }
            
            <Label htmlFor="#description">Description</Label> 
            <StyledTextArea name="description" id="#description" value={description} onChange={handleChange }/>
        </FormGroup>
    )
}

const PickDates = ({
    startTime,
    endTime,
    days,
    handleDaySelection,
    handleChange
}) => {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const radioForms = weekDays.map((day, i) => {
        return ( 
            <div>
                <FormCheckbox 
                    type="checkbox"
                    checked={days[i]} 
                    onChange={ () => handleDaySelection(i, "days") } 
                >
                {day}
                </FormCheckbox>     
            </div>

        )
    });
    return (
        <FormGroup>
            <Label>Start</Label> 
            <StyledFormInput type="time"  name="startTime" value={startTime} onChange={handleChange} />
            <Label>End</Label> 
            <StyledFormInput type="time" name="endTime"  value={endTime} onChange={handleChange} />
            <RadioButtonWrapper>
                {radioForms}
            </RadioButtonWrapper>
        </FormGroup>
    )
}


export default AddTask;
