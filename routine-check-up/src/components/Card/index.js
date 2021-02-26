import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 12px;
    margin: 12px 0;
    background: ${ props => props.background ? props.background : 'white' };
    border-radius: 10px;
    width: ${ props => props.width ? props.width+'px' : '400px' };
    height: ${ props => props.height ? props.height+'px' : 'auto'}; 
    @media (max-width: 453px) {
        width: 90%;
        height: 150px;
    }
`;

const Header = styled.div`
    padding: 14px 25px;
    font-size: 16px;
    font-weight: 400;
    height: ${ props => props.headerHeight ? props.headerHeight+'px' : '150px'};
    border-bottom: ${ props => props.borderTop ? `1px solid ${props.borderTop}` : 'none'};

    @media (max-width: 453px) {
        padding: 12px;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    padding: 14px 25px;
    height: ${ props => props.bodyHeight ? props.bodyHeight+'px' : '200px'}; 

    @media (max-width: 453px) {
        padding: 12px;
    }   
`;

const Footer = styled.div`
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    background: ${ props => props.background ? props.background : 'white' };
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 8px 25px;
    border-top: ${ props => props.borderBottom ? `1px solid ${props.borderBottom}` : 'none'};
    
    @media (max-width: 453px) {
        padding: 12px;
    }
`;

const Card = ({
    header,
    body,
    background,
    borderTop,
    borderBottom,
    footer,
    headerHeight, 
    bodyHeight, 
    height, 
    width
}) => (

    <Container height={height} width={width} background={background}>
        { header && <Header headerHeight={headerHeight} borderTop={borderTop} >
            {header}
        </Header>
        }
        <Body bodyHeight = {bodyHeight}>
            {body}
        </Body>
        { footer && <Footer background={background} borderBottom={borderBottom}>{footer}</Footer> }
    </Container> 

);

Card.propTypes = {
    header: PropTypes.elementType,
    body: PropTypes.elementType,
    footer: PropTypes.elementType,
    headerHeight: PropTypes.string, 
    footerHeight: PropTypes.string, 
    height: PropTypes.string, 
    width: PropTypes.string,
    name: PropTypes.string
};

export default Card;
