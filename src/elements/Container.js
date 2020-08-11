import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  display: grid;
  gap: 2.5rem;

  h1 {
    margin-bottom: 2.5rem;
  }
  @media only screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export default Container;
