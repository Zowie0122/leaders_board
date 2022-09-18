import styled from "styled-components";
import { SIZES, SizeT } from "../../styles/Sizes";
import { SPACES } from "../../styles/Spaces";

export type AvatarProps = {
  margin?: string;
  size?: keyof SizeT;
  bgImg: string;
};

const StyledAvatar = styled.div<AvatarProps>`
  border-radius: 50%;
  width: ${(props) => SIZES[props.size || "large"]};
  height: ${(props) => SIZES[props.size || "large"]};
  margin: ${(props) => props.margin || SPACES.none};
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
`;

export default StyledAvatar;
