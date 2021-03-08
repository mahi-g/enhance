import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';

const Button = styled.button`
    font-size: 10px;
    height: 24px;
    min-width: 58px; 
    background: #8BA1DB;
    border-radius: 14px;
    color: white;
    border: none;
    margin: 0 5px;
    @media (max-width: 453px) {
        min-width: 48px;
        margin: 0 2px;
`
const ButtonGroup = styled.div`
    min-width: 120px
    @media (max-width: 453px) {
        min-width: 100px;
`

const Category = styled.div`
    height: 22px;
    width: 84px;
    background: #8FD4BC;
    font-weight: 500;
    font-size: 10px;
    border-radius: 4px;
    text-align: center;
    padding: 4px;
    margin-top: 10px;
    margin-right: 5px;
`;
const Group = styled.div`
    display: flex;
`;

const Test = () =>  (
    <>
    <Card 
        header = {"Do laundry in the morning"}
        body = {
            <>
                <div>
                    Some work clothes and sleepwear. Some work clothes and sleepwear. Some work clothes and sleepwear.
                </div>
                <Group>
                    <Category>4:00 - 4:30 pm</Category>
                    <Category>Cleaning</Category>
                </Group>
            </>
             }
        footer = {
            <>
                <p>Did you complete this task?</p>
                <ButtonGroup>
                    <Button>Yes</Button>
                    <Button>No</Button>
                </ButtonGroup>
            </>
        }
        headerHeight = "40"
        bodyHeight = "100"
        height = "160"
        width = "400"
        background = "#C8E3D9FF"
        borderBottom = "#8FD4BC"
    />
<br/>
<Card 
        header = {"Do laundry in the morning"}
        body = {
                <>
                    <div>
                        "Some work clothes and sleepwear. Some work clothes and sleepwear. Some work clothes and sleepwear."
                    </div>
                    <Group>
                        <Category>4:00 - 4:30 pm</Category>
                        <Category>Cleaning</Category>
                    </Group>
                </>
            }
        headerHeight = "40"
        bodyHeight = "110"
        height = "150"
        width = "400"
        borderTop = "#F4F4F4"
    />

    </>
)


export default Test;