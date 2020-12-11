import React from 'react'
import { Card, CardBody, CardTitle } from 'shards-react'
import { CgProfile } from 'react-icons/cg'

const card = {
    marginTop: "3%",
    boxShadow: 'none',
    borderRadius: '3px',
}

const activities = [
    { name: 'Angie', activity:"all tasks for today", time: "2020-12-10 21:34:00" },
    { name: 'Angie', activity:"all tasks for today", time: "2020-12-10 20:40:00" },
    { name: 'John', activity:"cleaning", time: "2020-12-10 16:00:00" },
    { name: 'Emily', activity:"self-care", time: "2020-12-10 14:30:00" },
    { name: 'Mahi', activity:"hobbies", time: "2020-12-10 13:15:00" },
    { name: 'Jane', activity:"all tasks for today", time: "2020-12-10 11:30pm" },
    { name: 'John', activity:"self-care", time: "2020-12-9 5:30pm" },
    { name: 'John', activity:"reading", time: "2020-12-9 9:am" },
    { name: 'Anthony', activity:"exercise", time: "2020-12-8 6:00pm" },
    { name: 'Mahi', activity:"cleaning", time: "2020-12-8 4:30pm" },
    { name: 'Emily', activity:"all tasks for today", time: "2020-12-8 6:30am" },
]

const RecentActivities = (props) => {
    const getTime = (time) => {
        const timeInMS = new Date().getTime() - new Date(time).getTime();
        const retTime = timeInMS/1000 <= 60 ? Math.floor(timeInMS/1000)+"s ago" : timeInMS/60000 <= 60 ? Math.floor(timeInMS/60000)+"m ago" : timeInMS/3600000 <= 24 ? Math.floor(timeInMS/3600000)+"h ago" : time.split(' ')[0];
        console.log(retTime);
        return retTime;
    }
    const recentActivities = activities.map(activity => {
        return(
            <Card style={card}>
                <CardBody style={{padding: '2px', margin: '2%'}}>
                    <div style={{display: 'flex'}}>
                        <div style={{margin: 'auto', marginRight: '3%', marginLeft: '3%'}}>
                            <CgProfile color={'#f0f3fa'} size={40} />
                        </div>
                        <div>
                            <p style={{padding: '0px', margin: '0', fontSize: '.80em', fontWeight: 'bold'}}>{activity.name}</p>
                            <p style={{padding: '0px', margin: '0', fontSize: '.80em'}}>Completed <span style={{color: 'salmon'}}>{activity.activity}</span></p>
                            <p style={{padding: '0px', margin: '0', fontSize: '.70em'}}>{getTime(activity.time)}</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    });
    return (
        <>
            { recentActivities }
        </>
    );
}

export default RecentActivities;