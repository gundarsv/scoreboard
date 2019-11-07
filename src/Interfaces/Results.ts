export interface Result {
    name:    string;
    ranking: Ranking[];
}

export interface Ranking {
    rank:   string;
    name:   string;
    result: string;
}
  