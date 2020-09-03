import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link }from "react-router-dom";

const Menu = ({open}) => {
return (
    <StyledMenu open={open}>
        <Link to='/'>
            <span role="img" aria-label="home">&#127968;</span>
            Home
        </Link>
        <Link to='/about'>
            <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
            About Me
        </Link>
        <Link to='/projects'>
            <span role="img" aria-label="price"> &#128187;</span>
            Projects
        </Link>
        <Link to='/contact'>
            <span role="img" aria-label="contact"> &#x1f4e9;</span>
            Contact
        </Link>
    </StyledMenu>
)
}

Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;