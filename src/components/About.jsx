import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = ({ content }) => {
  const { title, items, description } = content;
  return (
    <section className='About'>
      <h2 className='About-title'>{title}</h2>
      <ul>
        <li className='About-item'>
          <FontAwesomeIcon icon={['fas', 'map-marked-alt']} color='#D7D7D7' size='3x' className='About-icon' />
          <div>
            <h3>{items[0]}</h3>
            <p>{description[0]}</p>
          </div>
        </li>
        <li className='About-item'>
          <FontAwesomeIcon icon={['fas', 'at']} color='#D7D7D7' size='3x' className='About-icon' />
          <div>
            <h3>{items[1]}</h3>
            <p>{description[1]}</p>
          </div>
        </li>
        <li className='About-item'>
          <FontAwesomeIcon icon={['fab', 'github']} color='#D7D7D7' size='3x' className='About-icon' />
          <div>
            <h3>{items[2]}</h3>
            <p><a href='https://github.com/Valakyr159'>{description[2]}</a></p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
