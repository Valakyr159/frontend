import React from 'react';

const Languages = ({ content }) => {
  const { title, items, description } = content;
  return (
    <section className='Languages glass'>
      <h2 className='Languages-title'>{title}</h2>
      <ul>
        <li className='Languages-item glass'>
          <h3>{items[0]}</h3>
          <p>{description[0]}</p>
        </li>
        <li className='Languages-item glass'>
          <h3>{items[1]}</h3>
          <p>{description[1]}</p>
        </li>
      </ul>
    </section>
  );
};

export default Languages;
