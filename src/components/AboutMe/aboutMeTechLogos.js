import React from 'react';
import styled from 'styled-components';
import php_logo from '../Images/logo-php.png';
import js_logo from '../Images/js.png';
import symfony_logo from '../Images/symfony.png';
import react_logo from '../Images/react.png';

const techLogos = [
    {
        label: 'php',
        path: php_logo,
    },
    {
        label: 'symfony',
        path: symfony_logo,
    },
    {
        label: 'javascript',
        path: js_logo,
    },
    {
        label: 'react',
        path: react_logo,
    }
];

export const TechLogos = () => {
    
    return (
        <Logos>
            {techLogos.map((logo) => {
                    return (
                    <Test>
                        <img src={logo.path} alt={logo.label}></img>
                    </Test>
                    )
                }
            )}
        </Logos>
    )
}

export default TechLogos;

const Logos = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding: 15px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.primaryLight};
    color:${({ theme }) => theme.primaryDark};
    @media screen and (max-width: 800px){
        width: 90%;
        margin: 15px 0;
    };
`

const Test = styled.div`
`