import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface Props {
  tapMenu: string;
  to: string;
}

function TapButton({ tapMenu, to }: Props) {
  const navigate = useNavigate();

  const handleClick = () => navigate(to);

  return <Button onClick={handleClick}>{tapMenu}</Button>;
}

export default TapButton;

const Button = styled.button`
  outline: none;
  border: none;
  height: 35px;
  width: 100px;
  border-radius: 25px;
  background: #f2f3f5;
  box-shadow: 5px 5px 10px #e1e2e4, -5px -5px 10px #ffffff;
  color: rgba(156, 156, 156, 0.48);
  font-size: 0.8rem;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.75);

  &:hover {
    cursor: pointer;
    box-shadow: 2.5px 2.5px 5px #e1e2e4, -2.5px -2.5px 5px #ffffff;
  }
`;