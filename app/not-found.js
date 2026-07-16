import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const Code = styled.h1`
  font-size: calc(4rem + 8vw);
  font-weight: 900;
  color: var(--purple);
  line-height: 1;
`;

const Message = styled.h2`
  font-size: calc(1rem + 2vw);
  color: var(--white);
  margin: 1rem 0 0.5rem;
`;

const SubMessage = styled.p`
  font-size: calc(0.8rem + 1vw);
  color: var(--nav2);
  margin-bottom: 2rem;
`;

const HomeButton = styled.a`
  padding: 0.8rem 2rem;
  background-color: var(--purple);
  color: var(--white);
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
    background-color: var(--pink);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export default function NotFound() {
  return (
    <Container>
      <Code>404</Code>
      <Message>Page Not Found</Message>
      <SubMessage>The page you are looking for does not exist.</SubMessage>
      <HomeButton href="/">Go Home</HomeButton>
    </Container>
  );
}
