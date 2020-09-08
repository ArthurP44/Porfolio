import React from 'react';
import styled from 'styled-components';

export const ProjectsSection = () => {
    return (
            <WrapperProjectsSection>
                <ProjectsLayout>
                    <h1>My Projects :</h1>
                </ProjectsLayout>
            </WrapperProjectsSection>   
            )
        }    
    
const WrapperProjectsSection = styled.div`
    min-height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width: 800px){
        padding-top: 80px;
        flex-direction: column;
    };
`

const ProjectsLayout = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0;
    padding: 15px;
    border-radius: 15px;
    background-color: white;
    color:${({ theme }) => theme.primaryDark};
    width: 25em;
    @media screen and (max-width: 800px){
        width: 90%;
        margin: 15px 0;
    };
`