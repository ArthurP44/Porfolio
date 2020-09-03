import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link }from "react-router-dom";

const dataMenu = [
    {
        label:'home',
        icon:'',
        link:'/',
        textContent:'Home',
    },
    {
        label:'about',
        icon:'',
        link:'/about',
        textContent:'About Me',
    },
    {
        label:'projects',
        icon:'',
        link:'/projects',
        textContent:'Projects',
    },
    {
        label:'contact',
        icon:'',
        link:'/contact',
        textContent:'Contact',
    },
]

const Menu = ({open, onClose}) => {
    
return (
    <StyledMenu open={open}>
    {dataMenu.map((button)=> {
        return (
        <Link to={button.link} onClick={onClose}>
            <span role="img" aria-label={button.label}></span>
            {button.textContent}
        </Link>
        )
        }
        
    )}   
    </StyledMenu>
)
}

Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;