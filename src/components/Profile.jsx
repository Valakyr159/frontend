import React from 'react';

const Profile = ({ content }) => {
  const { title, description } = content;
  return (
    <section className='Profile glass'>
      <h2 className='Profile-title'>{title}</h2>
      <p className='Profile-desc'>{description}</p>
    </section>
  );
};

export default Profile;
