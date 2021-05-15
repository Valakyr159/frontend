import React from 'react';

const Academic = ({ content }) => {
  const { title, items, description } = content;
  return (
    <section className='Academic glass'>
      <h2 className='Academic-title'>{title}</h2>
      <ul>
        <li className='Academic-item glass'>
          <h3>{items[0]}</h3>
          <p>{description[0]}</p>
        </li>
        <li className='Academic-item glass'>
          <h3>{items[1]}</h3>
          <p>{description[1]}</p>
        </li>
        <li className='Academic-item glass'>
          <h3>{items[2]}</h3>
          <p>{description[2]}</p>
        </li>
      </ul>
    </section>
  );
};

export default Academic;
