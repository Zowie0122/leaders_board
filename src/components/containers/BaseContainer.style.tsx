import styled from "styled-components";
import { PosT } from "../../pages/leaderBoard/types";
import { SPACES } from "../../styles/Spaces";

export type ContainerProps = {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  flexDirection?: "row" | "column";
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-round"
    | "space-evenly";
  alignItems?: "stretch" | "center" | "start" | "end";
  movePos?: boolean;
  currPos?: PosT;
  prevPos?: PosT;
};

const StyledBaseContainer = styled.div<ContainerProps>`
  width: ${(props) => props.width || SPACES.full};
  height: ${(props) => props.height || SPACES.full};
  margin: ${(props) => props.margin || SPACES.small};
  padding: ${(props) => props.padding || `${SPACES.none} ${SPACES.large}`};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  transition: all 0.5s ease-out;
  transform: translateY(
    ${(props) =>
      props.movePos && props.currPos && props.prevPos
        ? `${props.currPos.top - props.prevPos.top}px`
        : "0px"}
  );
`;

export default StyledBaseContainer;
