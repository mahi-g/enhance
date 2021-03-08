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

const friendList = [
    { name: 'Angie', summary: "Completed 12 tasks this month and 120 this year" },
    { name: 'Michael', summary: "Completed 12 tasks this month and 120 this year" },
    { name: 'John', summary: "Completed 12 tasks this month and 120 this year" },
    { name: 'Emily', summary: "Completed 12 tasks this month and 120 this year" },
    { name: 'Mahi', summary: "Completed 12 tasks this month and 120 this year" },
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

const Input = styled.input`
    width: 200px;
    height: 30px;
    font-size: 12px;
    padding-left: 14px;
    padding-top: 2px;
    box-shadow: inset 0px 8px 8px -10px #BEBEBE;
    border: none;
    border-radius: 12px;
    &:focus {
        outline: none;
        border: 2px solid #8FD4BC;
    }
    @media (max-width: 453px) {
        width: 65%;
    }
`;

const Search = () => (
    <Group>
        <Input placeholder="Add a friend" type="text" />
        <Button translate={ TRANSLATE_BUTTON }>Add</Button>
    </Group>
);

const Friend = () => {
    const friends = friendList.map((friend, index) => {
        return(
            <SmallCard 
                innerText = {
                    <div>
                            <p><span style={{ fontWeight: 'bold'}}>{friend.name}</span></p> 
                            <p>{friend.summary}</p>
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
            <Search />
            <Header width={'400px'} headerText={"Friends"} text={'4'}/>
            <div style={{marginBottom: '10%'}}>{friends}</div>
            <Button 
                translate={TRANSLATE_BUTTON} 
                width={'120'}>Show More
                </Button>
        </Container>
    );
}

export default Friend;