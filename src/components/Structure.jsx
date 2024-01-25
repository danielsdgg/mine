import React from 'react';
import Home from '../pages/Home'
import About from '../pages/About';
import Skills from '../pages/Skills';
import Work from '../pages/Work';
import Contacts from '../pages/Contacts';
import { Element } from 'react-scroll';

const Structure = () => {
  return (
    <Element name='all pages'>
        {/* The first part is the home */}
        <Element name="home">
            <Home/>
        </Element>
        {/* The second part is the About */}
        <Element name="about">
            <About/>
        </Element>
        {/* The third part is the skills */}
        <Element name="skills">
            <Skills/>
        </Element>
        {/* The fourth part is work */}
        <Element name="work">
            <Work/>
        </Element>
        {/* The fifth part is the Contacts */}
        <Element name="contacts">
            <Contacts/>
        </Element>

    </Element>
  )
}

export default Structure