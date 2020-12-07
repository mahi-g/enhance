import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import TaskControl from '../Components/Tasks/TaskControl'
import DailyTaskControl from '../Components/DailyTaskControl'
import FriendsList from '../Components/Friends'
import HomePage from '../Components/HomePage'

const Routes = (props) => {
    return(
            <Switch>
                <Route path="/routine">
                    <TaskControl />
                </Route>
                <Route path="/home">
                    <HomePage  {...props}/>
                </Route>
                <Route path="/todays-tasks">
                    <TaskControl />
                </Route>
                <Route path="/manage-tasks">
                    <TaskControl />
                </Route>
                <Route path="/friends">
                    <FriendsList friends={props.friends}/>
                </Route>
                <Route path="/" exact>
                    <DailyTaskControl
                        tasks = {props.tasks}
                        handleTaskDeletion={props.handleTaskDeletion}
                        handleTaskClick={props.handleTaskClick}
                        handleAddTask={props.handleAddTask}
                    />
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
