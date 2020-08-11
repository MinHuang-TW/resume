import styled from 'styled-components';

const Button = styled.a`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  text-decoration: none;
  border: 1px solid white;
  background: transparent;
  width: 100%;
  padding: 1rem 0;
  font-size: 0.88rem;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  letter-spacing: 1.5px;

  &:hover {
    color: ${(props) => props.theme.textStrong};
    border-color: ${(props) => props.theme.textStrong};
    background: rgba(233, 230, 18, 0.2);
  }
`;

export default Button;
