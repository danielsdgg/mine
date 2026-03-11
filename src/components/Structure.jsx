import React from 'react';
import Home from '../pages/Home'
import Skills from '../pages/Skills';
import Work from '../pages/Work';
import Contacts from '../pages/Contacts';
import { Element } from 'react-scroll';
import Footer from '../pages/Footer';

const Structure = () => {
  return (
    <Element name='all pages'>
        {/* First section */}
        <Element name="home">
            <Home/>
        </Element>
        {/* Second section */}
        <Element name="skills">
            <Skills/>
        </Element>
        {/* Third section */}
        <Element name="work">
            <Work/>
        </Element>
        {/* Fourth section */}
        <Element name="contacts">
            <Contacts/>
        </Element>
        {/* Last section */}
        <Element name='footer'>
            <Footer/>        
        </Element>        
    </Element>
  )
}

export default Structure