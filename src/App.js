import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import { useOnClickOutside } from './hooks';
import { WelcomeSection } from './components/welcome';
import { AboutMeSection } from './components/AboutMe/aboutMe';
import { ProjectsSection } from './components/Projects/projects';
import { ContactSection } from './components/contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} onClose={() => setOpen(false)} />
          </div>
              <Route path="/" exact component={WelcomeSection} />
              <Route path="/about" component={AboutMeSection} />
              <Route path="/projects" component={ProjectsSection} />
              <Route path="/contact" component={ContactSection} />
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;