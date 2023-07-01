import React from "react";
import styled from "styled-components";

export interface iBtn {
  width?: string;
  height?: string;
  color?: string;
  bg?: string;
  border?: string;
  text?: string;
  brad?: string;
}

const GlobalButton: React.FC<iBtn> = ({
  width,
  height,
  color,
  bg,
  border,
  text,
  brad
}) => {
  return (
    <div>
      <Container
        width={`${width}`}
        height={`${height}`}
        color={`${color}`}
        bg={`${bg}`}
        border={`${border}`}
        brad={`${brad}`}
      >
        {text}
      </Container>
    </div>
  );
};

export default GlobalButton;

const Container = styled.div<{
  width: string;
  height: string;
  bg: string;
  border: string;
  color: string;
  brad: string;
}>`
  width: ${({ width }) => width};
  background-color: ${({ bg }) => bg};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  border-radius: ${({ brad }) => brad};
  border:${({ border }) => border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;

  :hover{
    cursor: pointer;
  }
`;
