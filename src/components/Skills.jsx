import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = ({ content }) => {
  const { title, items } = content;
  return (
    <section className='Skills glass'>
      <h2 className='Skills-title'>{title}</h2>
      <ul>
        <li className='Skills-item glass'>
          <h3>{items[0]}</h3>
          <FontAwesomeIcon icon={['fab', 'html5']} color='#FF651E' size='3x' className='html5' />
          <FontAwesomeIcon icon={['fab', 'css3-alt']} color='#0074BC' size='3x' className='css3' />
          <FontAwesomeIcon icon={['fab', 'js']} color='#F7E018' size='3x' className='js' />
        </li>
        <li className='Skills-item glass'>
          <h3>{items[1]}</h3>
          <FontAwesomeIcon icon={['fab', 'vuejs']} color='#49D191' size='3x' className='vuejs' />
        </li>
        <li className='Skills-item glass'>
          <h3>{items[2]}</h3>
          <FontAwesomeIcon icon={['fab', 'react']} color='#61DAFB' size='3x' className='react' />
        </li>
      </ul>
    </section>
  );
};

export default Skills;
