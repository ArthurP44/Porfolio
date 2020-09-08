import React from 'react';
import styled from 'styled-components';



export const WelcomeSection = () => {
    return (
            <WelcomeLayout>
                <div>
                    <h1>Hello, welcome to my Portfolio</h1>
                    <img src="https://media.giphy.com/media/PiQejEf31116URju4V/giphy.gif" alt="gif" />
                </div>
            </WelcomeLayout>   
            )
        }    
    
const WelcomeLayout = styled.div`
    min-height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.primaryLight};
    width: 100%;
`
