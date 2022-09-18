import StyledAvatar, { AvatarProps } from "./Avatar.style";

interface PropsI extends AvatarProps {}

function Avatar({ bgImg, ...rest }: PropsI) {
  return <StyledAvatar bgImg={bgImg} {...rest} />;
}

export default Avatar;
