import React from 'react';
import styled from 'styled-components';


export const AboutMeSection = () => {
    return (
            <AboutMeLayout>
                <h1>About me : </h1>
            </AboutMeLayout>   
            )
        }    
    
const AboutMeLayout = styled.div`
    display:flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    background-color: red;
    color:${({ theme }) => theme.primaryDark};
    width: 100%;
`
