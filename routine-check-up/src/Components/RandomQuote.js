import React from 'react';

const quotes = {
    fontFamily: 'Overpass, sans-serif',
    fontSize: '64px',
    fontWeight: '700',
    padding: '0',
    margin: '0',
}


const text = {
    fontSize: '20px',
    fontWeight: '500',
    marginRight: '5%',
    marginLeft: '5%'
}
const float = {
    display:'flex',
    justifyContent: 'flex-end'
}


const RandomQuote = () => {
    return(
        <div>
            <div style={quotes}>“</div>
            <div style={text}>To finish what you started, start what you need to finish</div>
            <div style={float}><div style={quotes}>”</div></div>
        </div>
    )
}

export default RandomQuote;