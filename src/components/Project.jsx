import React from 'react';
import Container from '../elements/Container';
import List from '../elements/List';
import Button from '../elements/Button';
import COVID from '../images/covid19.jpg';
import Expense from '../images/expense.jpg';
import Spinsight from '../images/spinsight.jpg';
import styled from 'styled-components';

const Project = () => {
  const projectLists = [
    {
      img: COVID,
      title: 'COVID-19 Tracker',
      web: 'https://covid19-taiwan.netlify.app/',
      github: 'https://github.com/MinHuang-TW/corona-tracker',
      text: [
        { 'App Type': 'Progressive Web Apps' },
        { 'Frontend Library': 'Reactjs' },
        { 'Data Storage': 'Local storage' },
        { '3rd-party API': 'NOVELCovid' },
        { Deployment: 'Netlify' },
      ],
    },
    {
      img: Expense,
      title: 'Expense Tracker',
      web: 'https://fierce-dawn-03917.herokuapp.com/',
      github: 'https://github.com/MinHuang-TW/expense-tracker',
      text: [
        { 'Frontend Library': 'Reactjs' },
        { 'State Management': 'React context' },
        { Authorization: 'json web token' },
        { 'Data Storage': 'MongoDB' },
        { Backend: 'Expressjs, Nodejs' },
        { Deployment: 'Heroku' },
      ],
    },
    {
      img: Spinsight,
      title: 'SpInsight',
      web: 'https://spinsight.netlify.app/',
      github: 'https://github.com/MinHuang-TW/spinsight',
      text: [
        { 'Frontend Library': 'Reactjs' },
        { 'State Management': 'Redux' },
        { Authorization: 'Firebase auth' },
        { 'Data Storage': 'Firebase cloud' },
        { Backend: 'Firebase cloud functions, Expressjs, Nodejs' },
        { Deployment: 'Netlify, Firebase cloud' },
      ],
    },
  ];

  return (
    <ProjectContainer>
      <h1>Projects</h1>
      {projectLists.map(({ img, web, github, title, text }) => (
        <ProjectBlock key={title}>
          <ProjectImage img={img}>
            <div>
              <Button href={web} target='_blank'>
                Live Demo
              </Button>
              <Button href={github} target='_blank'>
                View Code
              </Button>
            </div>
          </ProjectImage>
          <h2>[ {title} ]</h2>
          <List>
            {text.map((t, index) => (
              <li key={index}>
                <span>{Object.keys(t)}</span>
                {Object.values(t)}
              </li>
            ))}
          </List>
        </ProjectBlock>
      ))}
    </ProjectContainer>
  );
};

export default Project;

const ProjectBlock = styled.div`
  display: grid;
  grid-template-rows: 24vw 5rem auto;

  h2 {
    align-self: center;
    margin: 0 !important;
  }

  li {
    font-size: 0.88rem;
    color: ${(props) => props.theme.textDark};

    span {
      color: rgba(255, 255, 255, 0.87);
      text-transform: uppercase;
    }
  }

  @media only screen and (max-width: 960px) {
    grid-template-rows: 50vw 5rem auto;
  }
`;

const ProjectContainer = styled(Container)`
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 2.5rem;
  margin-bottom: 5rem;

  h1 {
    grid-column: 1 / -1;
    margin: 0;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 24vw;
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 0.25rem;

  display: flex;
  justify-content: center;
  text-align: center;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: background 0.5s ease-in-out;
  }

  &:hover {
    &::before {
      background: rgba(0, 0, 0, 0.87);
    }

    ${Button} {
      display: default;
      z-index: 10;
      opacity: 1;
    }
  }

  @media only screen and (max-width: 960px) {
    height: 50vw;
  }
`;
