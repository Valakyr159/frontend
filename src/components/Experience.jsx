import React from 'react';

const Experience = ({ content }) => {
  const { title, items, description } = content;
  return (
    <section className='Experience glass'>
      <h2 className='Experience-title'>{title}</h2>
      <ul>
        <li className='Experience-item glass'>
          <a href='https://diablo3-valakyr.netlify.app'><h3>{items[0]}</h3></a>
          <p>{description[0]}</p>
        </li>
        <li className='Experience-item glass'>
          <a href='https://exchange-valakyr.netlify.app'><h3>{items[1]}</h3></a>
          <p>{description[1]}</p>
        </li>
        <li className='Experience-item glass'>
          <a href='https://platzimusic-valakyr.netlify.app'><h3>{items[2]}</h3></a>
          <p>{description[2]}</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
