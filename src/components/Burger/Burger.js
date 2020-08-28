import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from '/Burger.styled';


const Burger = ({open, setopen}) => {
return (
<StyledBurger open={open} onClick={() => setopen(!open)}>
    <div />
    <div />
    <div />
</StyledBurger>
)
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;