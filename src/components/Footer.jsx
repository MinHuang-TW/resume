import React from 'react';
import Button from '../elements/Button';
import styled from 'styled-components';

const Footer = () => (
  <Foot>
    <Container>
      <FooterButton href={process.env.REACT_APP_URL} target='_blank'>
        download resume
      </FooterButton>
      <FooterButton href='mailto:h.min719@gmail.com'>mail me</FooterButton>
    </Container>
    <small>© 2020 MIN HUANG. All Rights Reserved</small>
  </Foot>
);

export default Footer;

const FooterButton = styled(Button)`
  opacity: 1;
  width: auto;
  padding: 1rem 2.5rem;

  &:not(:last-of-type) {
    margin-right: 1.5rem;
  }
`;

const Container = styled.section`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const Foot = styled.footer`
  width: 100vw;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  padding: 5rem 0 10rem;

  small {
    opacity: 0.5;
    font-size: 12px;
    color: ${(props) => props.theme.textDark};
    position: absolute;
    left: 50%;
    bottom: 1.5rem;
    transform: translateX(-50%);
  }
`;
