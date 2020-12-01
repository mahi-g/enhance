import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Routes from './routes/Routes'

import { Container, Col, Row } from "shards-react";
import Footer from './Components/Layout/Footer'
import Navigation from './Components/Navigation'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";



function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Container style={{height:'100vh'}} fluid className="dr-example-container bg-secondary">
            <Routes />
        </Container>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
