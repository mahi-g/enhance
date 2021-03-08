import React from 'react';
import styled from 'styled-components';            

const Card = styled.div`
    height: 78px;
    width: ${ props => props.width ? props.width+'px' : '350px'}; 
    background: #fff;
    margin: 14px 0;
    display: flex;
    padding: 2px;
    border-radius: 8px;
    font-size: 14px;
    color: #666666;
    @media (max-width: 453px) {
        height: 64px;
        font-size: 11px;
    }
`;

const Profile = styled.div`
    margin: auto 3%;
`;

const Text = styled.div`
    margin: auto 3%;
    
`;

const SmallCard = ({ 
    profile, 
    innerText,
    width
}) => (
    <Card width={width}>
        <Profile>{ profile }</Profile>
        <Text>{innerText}</Text>
    </Card>
);

export default SmallCard;