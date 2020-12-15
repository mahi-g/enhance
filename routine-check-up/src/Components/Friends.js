import React, {useEffect, useState} from 'react';
import {
    Button,
    Col,
    Container,
    Row,
    Modal,
    ModalBody,
    ModalHeader,
    Form,
    FormGroup,
    FormInput,
    FormTextarea, FormSelect
} from "shards-react";
import 'antd/dist/antd.css';
import Divider from './Divider'
import {Badge, Card, Avatar, Tag} from "antd";
import ModalForm from "./Tasks/ModalForm";
import DailyTaskHeader from "./DailyTasksHeader";

//ToDo: convert this to a context later
const CURRENT_USER = 10001;

const card = {
    borderRadius: '3px',
    marginBottom: "10px"
}

const layout = {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#666666'
}

const header = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const currentTask = {
    border: "1px solid #c1c1c5",
    borderRadius: "25px",
    padding: "16px",
    background: "#f0efeb",
    color: "black"
}
/**
 * Base Component for the friends list page.
 * @param props contains an array of string ids passed from the router component.
 * @returns {JSX.Element}
 * @constructor
 */
const FriendsList = (props) => {
    const [friends, setFriends] = useState([]);
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    useEffect(() => {
        const getFriendData = async () => {
            let friendDataArr = [];
            for (let friend of props.friends) {
                const response = await fetch(`http://localhost:8080/users/${friend}`);
                const resJson = await response.json();
                friendDataArr.push(resJson);
            }
            setFriends(friendDataArr.sort((x, y) => x.curWeekPoints - y.curWeekPoints).reverse());
        };
        if (friends.length < 1) {
            getFriendData().then(x => x);
        }
        console.log(friends);
    }, [friends, props.friends]);

    /**
     * This variable contains a list of individual friend cards, created by mapping the friend data retrieved in the
     * useEffect() hook to an Ant Design Card component. The card is wrapped in a ribbon component to display the the
     * total points of the user the card belongs to.
     */
    const friendsOut = friends.map((friend, index) => {
        return (
            <Badge.Ribbon text={friend.curWeekPoints + ((index === 0) ? " Points 👑" : " Points")}>
                <Card style={card}>
                    <Avatar src={"https://picsum.photos/200?random=" + index} style={{margin: "8px"}}/>
                    <text><strong>{friend.name}</strong></text>
                    {(friend.friends.includes(CURRENT_USER)) ?
                        <Tag color="blue" style={{marginLeft: "16px"}}>Follows You</Tag> : <></>}
                    <Divider/>
                    <text style={{margin: "16px"}}>Next In Their Routine: <strong>{friend.Tasks[0].name}</strong></text>
                    <p style={currentTask}>{friend.Tasks[0].description}</p>
                    <Tag>{friend.Tasks[0].category}</Tag>
                </Card>
            </Badge.Ribbon>
        )
    });

    /**
     * This variable contains the contents of the "Add Friend" modal as well as the button used to spawn it.
     */
    const AddFriendModal = () => {
        return (
            <div>
                <Button pill size="sm" theme="primary" onClick={toggle}>
                    <strong>+ Add a Friend</strong>
                </Button>
                <Modal open={open} toggle={toggle}>
                    <ModalHeader>Add a Friend</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <label htmlFor="#taskname">Enter your friend's ID:</label>
                                <FormInput id="#taskname" name="Friend ID"/>
                            </FormGroup>
                            <Button pill size="sm" theme="primary" type="submit">
                                Add
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    };

    /**
     * This variable returns the header displayed at the top of the Friends page. It wraps the modal component.
     */
    const HeaderDisplay = () => {
        return (
            <Row>
                <Col sm={{size: 6, offset: 3}}>
                    <div style={{marginTop: "16px"}}>
                        <div style={header}>
                            <h2>Friends</h2>
                            <AddFriendModal/>
                        </div>
                        <Divider/>
                    </div>
                </Col>
            </Row>
        )
    };

    /**
     * Return statement for the FriendsList component, it wraps the header, and contains the list of friend cards
     * saved in friendsOut.
     */
    return (
        <Row>
            <Col>
                <HeaderDisplay/>
                <Col sm={{size: 6, offset: 3}}>
                    <Container fluid className="dr-example-container">
                        {friendsOut}
                    </Container>
                </Col>
            </Col>
        </Row>

    );
};


export default FriendsList;
