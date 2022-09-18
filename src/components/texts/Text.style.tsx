import styled from "styled-components";
import { SIZES, SizeT } from "../../styles/Sizes";
import { SPACES } from "../../styles/Spaces";

export type TextProps = {
  width?: string;
  padding?: string;
  size?: keyof SizeT;
  align?: "left" | "center" | "right";
};

const StyledText = styled.div<TextProps>`
  width: ${(props) => props.width || "fit-content"};
  padding: ${(props) => props.padding || `${SPACES.small} ${SPACES.medium}`};
  font-size: ${(props) => SIZES[props.size || "small"]};
  text-align: ${(props) => props.align || "left"};
`;

export default StyledText;
