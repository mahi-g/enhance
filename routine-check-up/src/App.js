import React from 'react';

import { Container, Col, Row } from "shards-react";
import Footer from './Components/Layout/Footer'
import Navigation from './Components/Navigation'
import TaskControl from './Components/Tasks/TaskControl'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";



function App() {
  return (
    <div className="App">
      <Navigation />
      <Container style={{height: '100vh'}} fluid className="dr-example-container bg-secondary">
        <TaskControl />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
