export interface User {
  id: string;
  email: string;
  username: string;
  teamName: string;
  avatar?: string;
}

export interface Player {
  id: string;
  name: string;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  rating: number;
  age: number;
  nationality: string;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  gamesPlayed: number;
  form: number;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  manager: string;
  stadium: string;
  players: Player[];
  wins: number;
  draws: number;
  losses: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore?: number;
  awayScore?: number;
  date: Date;
  status: 'scheduled' | 'live' | 'finished';
  matchday: number;
}

export interface MatchEvent {
  id: string;
  minute: number;
  type: 'goal' | 'yellow_card' | 'red_card' | 'substitution';
  player: string;
  team: 'home' | 'away';
  description: string;
}

export interface League {
  id: string;
  name: string;
  season: string;
  teams: Team[];
  fixtures: Match[];
}
