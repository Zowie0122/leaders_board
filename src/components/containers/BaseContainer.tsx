import { ReactElement } from "react";

import StyledBaseContainer, { ContainerProps } from "./BaseContainer.style";

interface PropsI extends ContainerProps {
  children: ReactElement;
  onAnimationEnd?: () => void;
}

function BaseContainer({ children, onAnimationEnd, ...rest }: PropsI) {
  return (
    <StyledBaseContainer onAnimationEnd={onAnimationEnd} {...rest}>
      {children}
    </StyledBaseContainer>
  );
}

export default BaseContainer;
