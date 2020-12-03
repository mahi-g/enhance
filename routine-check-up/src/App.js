import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/Routes'

import axios from 'axios';
import { Container } from "shards-react";
import Footer from './Components/Layout/Footer'
import Navigation from './Components/Navigation'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


const CURRENT_USER = '10001';
function App() {
  const [taskList, setTasks] = useState([{id:0, name:0, description: ""}]); 
  
  useEffect(() => {
    axios.get(`http://localhost:8080/users/${CURRENT_USER}`).then(
      ({ data }) => {
        setTasks(data.Tasks);
      }
    )
  },[]);

  const handleTaskDeletion = (id) => {
      const newTaskList = taskList.filter( (task) => task.id != id);
      newTaskList.length !== 0 ? setTasks(newTaskList) : setTasks([{id:0, name:0, description: ""}]);
  }

  const handleTaskClick = () => {
    console.log("Check");
  }

  const handleAddTask = (formData) => {
    //id generation is temporary, this will be handled by the db after a post request to api
    
    let currId = parseInt(taskList[taskList.length-1].id);
    currId++;
    const newTaskList = taskList.concat({...formData, id:currId});
    console.log(newTaskList);
    setTasks(newTaskList);
  }

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Container style={{minHeight: '100vh', height: '100%'}} fluid className="dr-example-container bg-secondary">
            <Routes 
              tasks={taskList}
              handleTaskDeletion={handleTaskDeletion}
              handleTaskClick={handleTaskClick}
              handleAddTask={handleAddTask}
            />
        </Container>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
