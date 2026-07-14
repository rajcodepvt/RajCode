import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0a0b10;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid var(--nav);
  border-top: 4px solid var(--purple);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense
        fallback={
          <Loader>
            <Spinner />
          </Loader>
        }
      >
        <ScrollToTop />
        <Header />
        <Home />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
