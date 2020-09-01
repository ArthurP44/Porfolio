import React from 'react';
import styled from 'styled-components';

export const ProjectsSection = () => {
    return (
            <ProjectsLayout>
                <h1>My Projects :</h1>
            </ProjectsLayout>   
            )
        }    
    
const ProjectsLayout = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
    background-color: white;
    color: ${({ theme }) => theme.primaryDark};
    width: 100%;
`