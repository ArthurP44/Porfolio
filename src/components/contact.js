import React from 'react';
import styled from 'styled-components';

export const ContactSection = () => {
    return (
            <ContactLayout>
                <h1>Contact me :</h1>
            </ContactLayout>   
            )
        }    
    
const ContactLayout = styled.div`
    display:flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    background-color: white;
    color:${({ theme }) => theme.primaryDark};
    width: 100%;
`