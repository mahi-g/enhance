import React from 'react';

const format = {
    display: "flex",
    justifyContent: "space-between",
    margin: '24px 0',
    color: '#333',
    fontSize : '20px'
}


const Header = ({
    headerText, 
    text='',
    width = '120px'
}) => {
    return (
        <div style={ { width , ...format } }>
            <div style={ { fontWeight: '700'}}>{headerText}</div>
            { text && <p>4</p> }
        </div>
    );
}


export default Header;