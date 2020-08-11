import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';
import { theme } from './util/theme';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className='container'>
      <Header />
      <Section />
      <Project />
    </div>
    <Footer />
  </ThemeProvider>
);

export default App;
