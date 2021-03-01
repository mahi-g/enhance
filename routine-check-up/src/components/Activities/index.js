import React from 'react'
import { CgProfile } from 'react-icons/cg'
import Header from '../Header'
import SmallCard from '../Card/SmallCard'
import { 
    Button,
    Category,
    Group
} from '../styledComponents'
import styled from 'styled-components';

const CONTAINER_WIDTH = '400px';
const TRANSLATE_BUTTON = '140px';

const activities = [
    { name: 'Angie', activity:"all", time: "2021-02-28 15:35:00" },
    { name: 'Angie', activity:"all", time: "2021-02-28 14:40:00" },
    { name: 'John', activity:"cleaning", time: "2021-02-28 16:00:00" },
    { name: 'Emily', activity:"self-care", time: "2021-02-27 14:30:00" },
    { name: 'Mahi', activity:"hobbies", time: "2021-02-27 13:15:00" },
    // { name: 'Jane', activity:"all", time: "2020-02-27 11:30pm" },
    // { name: 'John', activity:"self-care", time: "2021-02-26 5:30pm" },
    // { name: 'John', activity:"reading", time: "2020-12-9 9:am" },
    // { name: 'Anthony', activity:"exercise", time: "2020-12-8 6:00pm" },
    // { name: 'Mahi', activity:"cleaning", time: "2020-12-8 4:30pm" },
    // { name: 'Emily', activity:"all tasks", time: "2020-12-8 6:30am" },
]



const Container = styled.div`
    width: ${ CONTAINER_WIDTH };
    dislpay: flex;
    justify-content: center;
    align-items: center; 
    padding: 24px 0;
    margin: 0 auto;
    @media (max-width: 453px) {
        width: 80%;
    }
`;

const Activities = () => {
    const getTime = (time) => {
        const timeInMS = new Date().getTime() - new Date(time).getTime();
        const retTime = timeInMS/1000 <= 60 ? Math.floor(timeInMS/1000)+"s ago" : timeInMS/60000 <= 60 ? Math.floor(timeInMS/60000)+"m ago" : timeInMS/3600000 <= 24 ? Math.floor(timeInMS/3600000)+"h ago" : time.split(' ')[0];
        console.log(retTime);
        return retTime;
    }
    const recentActivities = activities.map((activity, index) => {
        return(
            <SmallCard 
                innerText = {
                    <div>
                            <Group>
                                <p><span style={{ fontWeight: 'bold'}}>{activity.name}</span> completed a task in </p> 
                                <Category>{activity.activity}</Category>
                            </Group>
                            <p style={{padding: '0px', margin: '0', fontSize: '.70em'}}>{getTime(activity.time)}</p>
                    </div>
                }
                profile = {
                    <CgProfile color={'#f0f3fa'} size={45} />
                }
                width={ CONTAINER_WIDTH }
            />        
        );
    });
    return (
        <Container>
            <Header headerText={"Activities"}/>
            <div style={{marginBottom: '10%'}}>{recentActivities}</div>
            <Button 
                translate={TRANSLATE_BUTTON} 
                width={'120'}>Show More
            </Button>
        </Container>
    );
}

export default Activities;