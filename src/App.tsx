import React from "react";
import styled from "styled-components";
import { ProgressIndicator } from "./loading/ProgressIndicator";

function App() {
  return (
    <Container>
      <ProgressIndicator />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export default App;
