import styled from "styled-components";
import React, { FunctionComponent, useState } from "react";
import { CircleProgress } from "./CircleProgress";

interface ProgressProps {}
export const ProgressIndicator: FunctionComponent<ProgressProps> = ({}) => {
  const [percentage, setPercentage] = useState(0);
  const width = 120;

  const increasePercentage = () => {
    setPercentage(percentage + 0.1 > 1 ? 0 : percentage + 0.1);
  };

  return (
    <ProgressContainer onClick={increasePercentage} width={width + "px"}>
      <Progress percentage={percentage} width={width} />
      <InnerContent>{(100 * percentage).toFixed()}%</InnerContent>
    </ProgressContainer>
  );
};

const InnerContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface ContainerProps {
  width: string;
}

const ProgressContainer = styled.div<ContainerProps>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  background-color: gray;
  border-radius: 50%;
`;

const Progress = styled(CircleProgress)`
  position: absolute;
  top: 0;
  left: 0;
`;
