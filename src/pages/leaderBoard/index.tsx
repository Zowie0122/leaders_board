import { useState, useEffect, useRef } from "react";

import BaseContainer from "../../components/containers/BaseContainer.style";
import LeaderTableRow from "./LeaderTableRow";

import Leaders from "../../data/leaders.json";
import { getRandom } from "../../utils/number";
import { deepClone, findByProp } from "../../utils/object";
import { LeaderT, LeadersT, PosT } from "./types";

// TODO: move this to config.ts if there are more configs across the project
const REFRESH_INTEVAL = 1000;
const RANDOM_RANGE = 0.1;

const _leaders = Leaders.map((leader, i) => ({
  ...leader,
  currIdx: i,
  prevIdx: i,
}));

function LeaderBoard() {
  const [leaders, setLeaders] = useState<LeadersT>(_leaders);
  const [positions, setPositions] = useState<PosT[]>([]);
  const containerEl = useRef<HTMLInputElement>(null);

  const generateNewRanking = (leaders: LeadersT) => {
    const _leadersForSort = deepClone(leaders);

    if (Array.isArray(_leadersForSort)) {
      // generate random scores base on the current scores within a range
      _leadersForSort.forEach((leader: LeaderT) => {
        leader.score = getRandom(
          leader.score - Math.floor(leader.score * RANDOM_RANGE),
          leader.score + Math.floor(leader.score * RANDOM_RANGE)
        );
      });

      _leadersForSort.sort((a: LeaderT, b: LeaderT) => b.score - a.score);
    }

    const _leadersForUpdate = deepClone(leaders);
    // switch the current idx as previous before reordering
    if (
      _leadersForUpdate !== null &&
      Array.isArray(_leadersForUpdate) &&
      Array.isArray(_leadersForSort)
    ) {
      _leadersForUpdate.forEach((leader) => {
        const newRankingIdx = findByProp(
          _leadersForSort,
          "userID",
          leader.userID
        );
        leader.prevIdx = leader.currIdx;
        leader.currIdx = newRankingIdx;
        leader.score = _leadersForSort[newRankingIdx].score;
      });

      setLeaders(_leadersForUpdate);
    }
  };

  useEffect(() => {
    // collect positions for each row at initial rendering
    const _positions: PosT[] = [];
    if (containerEl.current !== null) {
      Array.from(containerEl.current.children, (el) => {
        const { left, top } = el.getBoundingClientRect();
        _positions.push({ left, top });
      });
    }
    setPositions(_positions);

    const interval = setInterval(() => {
      if (Array.isArray(_leaders)) generateNewRanking(_leaders);
    }, REFRESH_INTEVAL);
    // clean up inteval before component get destroyed
    return () => clearInterval(interval);
  }, []);

  return (
    <BaseContainer width="37.5rem" flexDirection="column" ref={containerEl}>
      {leaders.map((leader, i) => (
        <LeaderTableRow
          key={i}
          ranking={i + 1}
          avatarSrc={leader.picture}
          name={leader.displayName}
          points={leader.score}
          currPos={positions[leader.currIdx]}
          prevPos={positions[leader.prevIdx]}
        />
      ))}
    </BaseContainer>
  );
}

export default LeaderBoard;
