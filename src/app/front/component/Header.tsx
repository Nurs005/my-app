import React from 'react';

const MY_STYLE: React.CSSProperties = {
    position: "relative",
    top: "20px",
    fontSize: "50px",
    textAlign: "center",
    color: 'black'
}

const Header = () => {
    return (
        <div>
            <h1 style={MY_STYLE}>Raiting</h1>
        </div>
    );
};

export default Header;