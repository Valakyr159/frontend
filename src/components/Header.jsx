import React from 'react';

const Header = ({ children, content }) => {
  const { title } = content;
  return (
    <section className='Header glass'>
      <div>
        <h1 className='Header-title'>{ title }</h1>
        {children}
      </div>
    </section>
  );
};

export default Header;
