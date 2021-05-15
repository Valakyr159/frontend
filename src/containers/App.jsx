import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import apiMock from '../utils/apiMock';

const App = () => {

  return (
    <>
      <Header content={apiMock.header}>
        <About content={apiMock.about} />
      </Header>
      <Profile content={apiMock.profile} />
      <Experience content={apiMock.experience} />
      <section className='Academic-Skills'>
        <Academic content={apiMock.academic} />
        <Skills content={apiMock.skills} />
      </section>
      <section className='Interest-Languages'>
        <Interest content={apiMock.interest} />
        <Languages content={apiMock.languages} />
      </section>
    </>
  );
};

export default App;
