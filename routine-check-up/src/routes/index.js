import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import FriendsList from '../components/Friends'
import Home from '../pages/home'
import RecentActivities from "../components/RecentActivities";
import Test from '../pages/test';

const Routes = (props) => {
    return(
            <Switch>
                <Route path="/recent-activities">
                    <RecentActivities />
                </Route>
                <Route path="/friends">
                    <FriendsList friends={props.friends}/>
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
