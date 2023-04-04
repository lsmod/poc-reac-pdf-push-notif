import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  color: purple;
  background-color: yellow;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: blue;
  padding: 1rem;
  border-radius: 15px;
  background: yellow;
`;

export const Div = ({ children }) => {
  return <div style={{ width: "100vh" }}>{children}</div>;
};
