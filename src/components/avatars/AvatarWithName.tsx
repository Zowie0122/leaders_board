import styled from "styled-components";
import Avatar from "./Avatar";
import Text from "../texts/Text";

const StyledContainer = styled.div`
  display: flex;
  justify-content: "start";
  align-items: center;
`;

interface PropsI {
  src: string;
  name: string;
}

function AvatarWithName({ src, name }: PropsI) {
  return (
    <StyledContainer>
      <Avatar bgImg={src} />
      <Text content={name} />
    </StyledContainer>
  );
}

export default AvatarWithName;
