import React from 'react';
import styled from 'styled-components';

const techLogos = [
    {
        label: 'php',
        name: 'logo-php.png',
    },
    {
        label: 'symfony',
        name: 'symfony.png',
    },
    {
        label: 'javascript',
        name: 'js.png',
    },
    {
        label: 'react',
        name: 'react.png',
    }
];

export const TechLogos = () => {
    
    return (
        <Logos>
            {techLogos.map((logo) => {
                    return (
                    <Test>
                        <img src={require(`assets/logos/${logo.name}`)} alt={logo.label}></img>
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