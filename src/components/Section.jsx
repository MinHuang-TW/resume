import React from 'react';
import Container from '../elements/Container';
import styled from 'styled-components';

const Section = () => {
  const educationLists = [
    {
      name: 'Delft University of Technology',
      text: 'Master of Design for Interaction, Industrial Design Engineering',
    },
    {
      name: 'National Cheng Kung University',
      text: 'Bachelor of Industrial Design',
    },
  ];

  const workLists = [
    {
      name: 'UX Researcher | Delft University of Technology',
      location: 'Delft, Netherlands',
      date: '12, 2018 - 06, 2019',
    },
    {
      name: 'UX Graduation Inern | OfficeVitae',
      location: 'Delft, Netherlands',
      date: '03, 2018 - 08, 2018',
    },
    {
      name: 'UX Intern | VanBerlo',
      location: 'Den Hague, Netherlands',
      date: '11, 2017 - 01, 2018',
    },
    {
      name: 'Industrial Designer | Dell',
      location: 'Singapore',
      date: '08, 2013 - 08, 2015',
    },
    {
      name: 'Industrial Designer | Compal',
      location: 'Taipei, Taiwan',
      date: '01, 2011- 08, 2013',
    },
  ];

  return (
    <SectionContainer>
      <div>
        <h1>Education</h1>
        {educationLists.map(({ name, text }) => (
          <Block key={name}>
            <h2>{name}</h2>
            <p>{text}</p>
          </Block>
        ))}
      </div>

      <div>
        <h1>Work Experiences</h1>
        <WorkBlock>
          {workLists.map(({ name, location, date }) => (
            <Block key={name}>
              <h2>{name}</h2>
              <p>{location}</p>
              <p>{date}</p>
            </Block>
          ))}
        </WorkBlock>
      </div>
    </SectionContainer>
  );
};

export default Section;

const Block = styled.div`
  margin-bottom: 2rem;

  h2 {
    line-height: 2rem;
  }
  p {
    margin: 0px;
  }
`;

const WorkBlock = styled(Block)`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: column;
  column-gap: 2.5rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
  }
`;

const SectionContainer = styled(Container)`
  margin-top: 8rem;
  grid-template-columns: 1fr 2fr;
  gap: 2.5rem;
  height: auto;
`;
