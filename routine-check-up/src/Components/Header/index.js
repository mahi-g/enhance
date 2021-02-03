import React from 'react';

const format = {
    display: "flex",
    justifyContent: "space-between"
}
const Header = ({headerText, text=''}) => {
    return (
        <div style={format}>
            <h5>{headerText}</h5>
            {text&&<p>{text}</p>}
        </div>
    );
}


export default Header;