import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Activities from "../components/Activities";
import Friend from '../components/Friend'
import Home from '../pages/home'
import ManageTasks from '../components/ManageTasks';
import Test from '../pages/test';

const Routes = (props) => {
    return(
            <Switch>
                <Route path="/activities">
                    <Activities />
                </Route>
                <Route path="/manage-tasks">
                    <ManageTasks />
                </Route>
                <Route path="/friends">
                    <Friend/>
                </Route>
                <Route path="/test">
                    <Test/>
                </Route>
                <Route path="/">
                    <Home  {...props}/>
                </Route>
                <Route>
                    <div>
                        <h1>404 Error</h1>
                        <p>Go to <Link to="/">Home</Link></p>
                    </div>
                </Route>
            </Switch>
    )
}

export default Routes;
