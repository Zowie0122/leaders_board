export type LeaderT = {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
  currIdx: number;
  prevIdx: number;
};

export type PosT = {
  left: number;
  top: number;
};

export type LeadersT = LeaderT[];
