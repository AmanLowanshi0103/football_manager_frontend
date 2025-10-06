import { faker } from '@faker-js/faker';
import { Player, Team, Match, League } from '../types';

const positions = ['GK', 'DEF', 'MID', 'FWD'] as const;
const nationalities = ['England', 'Spain', 'Brazil', 'Germany', 'France', 'Italy', 'Argentina', 'Portugal'];

export function generatePlayer(position?: typeof positions[number]): Player {
  const pos = position || faker.helpers.arrayElement(positions);
  const rating = faker.number.int({ min: 60, max: 95 });
  
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    position: pos,
    rating,
    age: faker.number.int({ min: 18, max: 35 }),
    nationality: faker.helpers.arrayElement(nationalities),
    goals: pos === 'FWD' ? faker.number.int({ min: 0, max: 25 }) : faker.number.int({ min: 0, max: 5 }),
    assists: pos === 'MID' || pos === 'FWD' ? faker.number.int({ min: 0, max: 15 }) : faker.number.int({ min: 0, max: 3 }),
    yellowCards: faker.number.int({ min: 0, max: 8 }),
    redCards: faker.number.int({ min: 0, max: 2 }),
    gamesPlayed: faker.number.int({ min: 10, max: 30 }),
    form: faker.number.int({ min: 1, max: 10 }),
  };
}

export function generateTeam(isUserTeam = false): Team {
  const players: Player[] = [
    ...Array(3).fill(null).map(() => generatePlayer('GK')),
    ...Array(8).fill(null).map(() => generatePlayer('DEF')),
    ...Array(8).fill(null).map(() => generatePlayer('MID')),
    ...Array(6).fill(null).map(() => generatePlayer('FWD')),
  ];

  const wins = faker.number.int({ min: 5, max: 20 });
  const draws = faker.number.int({ min: 2, max: 8 });
  const losses = faker.number.int({ min: 0, max: 10 });

  return {
    id: faker.string.uuid(),
    name: isUserTeam ? 'FC Champions' : faker.company.name() + ' FC',
    logo: `https://api.dicebear.com/7.x/shapes/svg?seed=${faker.string.uuid()}`,
    manager: faker.person.fullName(),
    stadium: faker.location.city() + ' Stadium',
    players,
    wins,
    draws,
    losses,
    points: wins * 3 + draws,
    goalsFor: faker.number.int({ min: 25, max: 70 }),
    goalsAgainst: faker.number.int({ min: 15, max: 50 }),
  };
}

export function generateLeague(): League {
  const teams = [
    generateTeam(true),
    ...Array(19).fill(null).map(() => generateTeam()),
  ];

  teams.sort((a, b) => b.points - a.points);

  const fixtures: Match[] = [];
  let matchId = 1;

  for (let matchday = 1; matchday <= 5; matchday++) {
    for (let i = 0; i < teams.length; i += 2) {
      if (i + 1 < teams.length) {
        const isFinished = matchday < 4 || (matchday === 4 && Math.random() > 0.5);
        const homeScore = isFinished ? faker.number.int({ min: 0, max: 4 }) : undefined;
        const awayScore = isFinished ? faker.number.int({ min: 0, max: 4 }) : undefined;

        fixtures.push({
          id: `match-${matchId++}`,
          homeTeam: teams[i],
          awayTeam: teams[i + 1],
          homeScore,
          awayScore,
          date: faker.date.soon({ days: matchday * 7 }),
          status: isFinished ? 'finished' : matchday === 4 ? 'live' : 'scheduled',
          matchday,
        });
      }
    }
  }

  return {
    id: 'premier-league',
    name: 'Premier League',
    season: '2024/2025',
    teams,
    fixtures,
  };
}

export const mockLeague = generateLeague();
