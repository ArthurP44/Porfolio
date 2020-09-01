import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import { useOnClickOutside } from './hooks';
import { WelcomeSection } from './components/welcome';
import { AboutMeSection } from './components/aboutMe';
import { ProjectsSection } from './components/projects';
import { ContactSection } from './components/contact';


function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <SectionLayout>
          <WelcomeSection/>
          <AboutMeSection/>
          <ProjectsSection/>
          <ContactSection/>
        </SectionLayout>
      </>
    </ThemeProvider>
  );
}

const SectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export default App;