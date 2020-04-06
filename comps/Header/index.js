import React from 'react';
import './header.css';

const Header = ({fontSize, color, onMouseOver, text}) => <div>
    <h1 style={{fontSize:fontSize}}>{text}</h1>
</div>

function MouseOver(){
    alert("mouse is over");
}

Header.defaultProps = {
    fontSize: 12,
    color:"#000", 
    onMouseOver:MouseOver,
    text:"Header"
}

export default Header;



