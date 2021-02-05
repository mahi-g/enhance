import React from 'react';

const format = {
    display: "flex",
    justifyContent: "space-between",
}


const Header = ({headerText, text='', size="20px"}) => {
    return (
        <div style={format}>
            <div style={{fontSize:size, fontWeight: '700'}}>{headerText}</div>
            {text&&<p>{text}</p>}
        </div>
    );
}


export default Header;