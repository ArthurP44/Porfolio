import React from 'react';
import styled from 'styled-components';
import TechLogos from './aboutMeTechLogos';
import pic from 'assets/images/profile-pic.jpg';

export const AboutMeSection = () => {

    return (
        <WrapperAboutMeSection>
            <AboutMeLayout>
                <h1>About me : </h1>
                <Infos>
                    <Picture>
                        <img src={pic} alt='profile-pic'></img>                    
                    </Picture>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."</p>
                </Infos>
            </AboutMeLayout>
            <AboutMeLayout>
                <Resume>
                    <button>see my resume online</button>
                    <button>download my resume</button>
                </Resume>
                <TechLogos/>
            </AboutMeLayout>
        </WrapperAboutMeSection>
    )
}

const WrapperAboutMeSection = styled.div`
    min-height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width: 800px){
        padding-top: 80px;
        flex-direction: column;
    };
`

const AboutMeLayout = styled.div`
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

const Infos = styled.div`
    margin: 0;
    padding: 0px;
    border-radius: 15px;

`
const Picture = styled.div`
    margin: 0;
    padding: 0;
    border-radius: 15px;

`
const Resume = styled.div`
    margin: 0;
    padding: 15px;
    background-color:red;
    border-radius: 15px;

`

