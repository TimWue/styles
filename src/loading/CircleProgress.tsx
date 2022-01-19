import styled from "styled-components";
import { FunctionComponent } from "react";

interface ProgressProps {
  percentage: number;
  width: number;
  className?: string;
}
export const CircleProgress: FunctionComponent<ProgressProps> = ({
  percentage,
  width,
  className,
}) => {
  const strokeWidth = 4;
  const radius = width / 2 - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;
  return (
    <svg width={width} height={width} className={className}>
      <Circle
        stroke="black"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={width / 2}
        cy={width / 2}
        circumference={circumference}
        percentage={percentage}
      />
    </svg>
  );
};

interface Props {
  circumference: number;
  percentage: number;
  strokeWidth: number;
}
const Circle = styled.circle<Props>`
  stroke-width: ${(props) => props.strokeWidth};
  stroke-dasharray: ${(props) => props.circumference}
    ${(props) => props.circumference};
  stroke-dashoffset: ${(props) =>
    props.circumference - props.percentage * props.circumference};
  transition: stroke-dashoffset 0.25s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;
