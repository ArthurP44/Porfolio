import React from 'react';
import styled from 'styled-components';
//import Images from '../Images';

const techLogos = [
    {
        label: 'php',
        //path: `${Images}/logo-php.png`,
    }
];

export const TechLogos = () => {
    
    return (
        <Logos>
            {techLogos.map((logo) => {
                    return <img src={logo.path} alt={logo.label}></img>
                }
            )}
        </Logos>
    )
}

export default TechLogos;

const Logos = styled.div`
    margin: 0;
    padding: 15px;
    background-color: yellow;
    border-radius: 15px;
`