import { ReactNode } from 'react';
import styled from 'styled-components';

type MyComponentProps = {
  children: ReactNode;
};

const Card = ({ children }: MyComponentProps) => {
  return (
    <CardWrapper>
      <div>{children}</div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  background: white;
  box-shadow: 0 2px 8px black;
  border-radius: 10px;
`;

export default Card;
