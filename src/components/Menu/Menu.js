import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({open}) => {
return (
    <StyledMenu open={open}>
        <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        À propos de moi
        </a>
        <a href="/">
        <span role="img" aria-label="price"> &#128187;</span>
        Projets
        </a>
        <a href="/">
        <span role="img" aria-label="contact"> &#x1f4e9;</span>
        Contact
        </a>
    </StyledMenu>
)
}

Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;