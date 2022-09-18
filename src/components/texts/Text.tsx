import StyledText from "./Text.style";
import { TextProps } from "./Text.style";

interface PropsI extends TextProps {
  content: string | number;
}

function Text({ content, ...rest }: PropsI) {
  return <StyledText {...rest}>{content}</StyledText>;
}

export default Text;
