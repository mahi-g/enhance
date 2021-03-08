import styled from 'styled-components';

const Button = styled.button`
    font-size: 10px;
    height: 24px;
    width: ${ props => props.width ? props.width+'px' : '58px'};
    background: ${ props => props.background ? props.background : '#8FD4BC'};
    border-radius: 14px;
    color: ${ props => props.color ? props.color : '#4444444'};
    border: none;
    margin: 5px;
    transform: ${ props => props.translate ? `translate( ${props.translate}, 0)` : 'translate(0, 0)' };
    @media (max-width: 453px) {
        min-width: 48px;
        margin: 0 2px;
        transform: ${ props => props.translate && `translate(75%, 0)`};
`;

const ButtonGroup = styled.div`
    min-width: 120px
    @media (max-width: 453px) {
        min-width: 100px;
`;
const Category = styled.div`
    height: 20px;
    width: ${ props => props.width ? props.width+'px' : "58px" };
    background: #8FD4BC;
    color: #333333;
    font-weight: 500;
    font-size: 10px;
    border-radius: 4px;
    text-align: center;
    padding: 3px;
    margin: 0 5px;
`;

const Container = styled.div`
    background: #f4f4f4;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100vw;
    min-height: 100vh;
    height: 100%;
`

const Group = styled.div`
    display: flex;
`;

export { Button, ButtonGroup, Category, Container, Group };