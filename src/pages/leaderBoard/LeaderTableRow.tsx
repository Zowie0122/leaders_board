import { useState, useEffect } from "react";

import BaseContainer from "../../components/containers/BaseContainer";
import Text from "../../components/texts/Text";
import AvatarWithName from "../../components/avatars/AvatarWithName";

import { POINT_UNIT } from "../../utils/constants";
import { PosT } from "./types";
import { SPACES } from "../../styles/Spaces";
import { SIZES } from "../../styles/Sizes";

interface PropsI {
  ranking: number;
  avatarSrc: string;
  name: string;
  points: number;
  currPos: PosT;
  prevPos: PosT;
}

const LeaderTableRow = ({
  ranking,
  avatarSrc,
  name,
  points,
  currPos,
  prevPos,
}: PropsI) => {
  const [hasChange, setHasChange] = useState(false);

  useEffect(() => {
    setHasChange(true);
  }, [currPos, prevPos]);

  return (
    <BaseContainer
      height={SIZES.large}
      padding={`${SPACES.none} ${SPACES.medium}`}
    >
      <>
        <Text content={ranking} width="10%" align="right" />
        <BaseContainer
          key={name}
          padding={SPACES.none}
          justifyContent="space-between"
          movePos={hasChange}
          currPos={currPos}
          prevPos={prevPos}
          onAnimationEnd={() => setHasChange(false)}
        >
          <>
            <AvatarWithName src={avatarSrc} name={name} />
            <Text content={`${points}${POINT_UNIT}`} />
          </>
        </BaseContainer>
      </>
    </BaseContainer>
  );
};

export default LeaderTableRow;
