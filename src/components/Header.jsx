import React from 'react';
import List from '../elements/List';
import Photo from '../images/photo.jpg';
import styled from 'styled-components';

const Header = () => (
  <Container>
    <Title>
      <h1>
        Hello<strong>!</strong>
      </h1>
      <img src={Photo} alt='Min Huang' />
    </Title>

    <Block>
      <p>
        My name is <Keyword>Min Huang(黃閔)</Keyword>.<br /> I design, and
        develop user interfaces with satisfying user experience(UX).
      </p>

      <List>
        <li>
          <Keyword>CELL</Keyword> +31 64446 1850
        </li>
        <li>
          <Keyword>MAIL</Keyword> h.min719@gmail.com
        </li>
        <li>
          <Keyword>GITHUB</Keyword>{' '}
          <a href='https://github.com/MinHuang-TW' target='_target'>
            https://github.com/MinHuang-TW
          </a>
        </li>
      </List>
    </Block>
  </Container>
);

export default Header;

const Keyword = styled.span`
  display: inline;
  color: ${(props) => props.theme.bgDark} !important;
  font-weight: bold;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    font-weight: 500;
    color: black;

    strong {
      margin-left: 0.5rem;
    }
  }

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin-top: 1rem;
  }
`;

const Block = styled.section`
  margin-top: -3.2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ${List} {
    grid-column: 2 / -1;
  }

  @media only screen and (max-width: 960px) {
    width: calc(100% - 8rem);
    grid-template-columns: 1fr;

    ${List} {
      grid-column: 1 / -1;
    }
  }
`;

const Container = styled.header`
  width: 100%;
  margin: 2rem auto;

  h1 {
    font-size: 4rem;
  }

  strong {
    color: ${(props) => props.theme.textStrong};
  }

  a,
  p,
  li {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1rem;
  }

  &::before {
    content: '';
    width: 100vw;
    height: 22rem;
    position: absolute;
    left: 0;
    top: 0;
    background: ${(props) => props.theme.bgLight};
    transform: skew(0, -3deg) translateY(-30%);
    z-index: -1;

    @media only screen and (max-width: 960px) {
      height: 34rem;
      transform: skew(0, -6deg) translateY(-30%);
    }
  }
`;
