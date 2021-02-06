import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import FriendsList from '../Components/Friends'
import HomePage from '../pages/HomePage'
import RecentActivities from "../Components/RecentActivities";

const Routes = (props) => {
    return(
            <Switch>
                <Route path="/recent-activities">
                    <RecentActivities />
                </Route>
                <Route path="/friends">
                    <FriendsList friends={props.friends}/>
                </Route>
                <Route path="/">
                    <HomePage  {...props}/>
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
