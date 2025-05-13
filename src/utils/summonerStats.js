import Top from "../assets/roles/Top_icon.png";
import Jungle from "../assets/roles/Jungle_icon.png";
import Middle from "../assets/roles/Middle_icon.png";
import Bottom from "../assets/roles/Bottom_icon.png";
import Support from "../assets/roles/Support_icon.png";
import None from "../assets/roles/None.png";

const rolesToImg = {
  TOP: Top,
  JUNGLE: Jungle,
  MIDDLE: Middle,
  BOTTOM: Bottom,
  UTILITY: Support,
  NONE: None,
};

export const calculateSummonerStats = (matches) => {
  let wins = 0;
  let losses = 0;
  let totalKda = 0;
  let totalKills = 0;
  let totalDeaths = 0;
  let totalAssists = 0;
  let mostPlayed = null;
  let secondMostPlayed = null;
  let champions = {};
  let roles = {};

  matches.forEach((match) => {
    const currSummoner = match.currentSummoner;

    if (currSummoner.win) wins++;
    else losses++;

    totalKda += Number(currSummoner.kda);
    totalKills += currSummoner.kills;
    totalDeaths += currSummoner.deaths;
    totalAssists += currSummoner.assists;

    champions[currSummoner.championName]
      ? (champions[currSummoner.championName] += 1)
      : (champions[currSummoner.championName] = 1);

    if (currSummoner.role === "") return;

    roles[currSummoner.role]
      ? (roles[currSummoner.role] += 1)
      : (roles[currSummoner.role] = 1);
  });

  const sortedChampions = Object.entries(champions).sort((a, b) => b[1] - a[1]);
  const sortedRoles = Object.entries(roles).sort((a, b) => b[1] - a[1]);

  mostPlayed = sortedChampions[0] ? sortedChampions[0][0] : null;
  secondMostPlayed = sortedChampions[1] ? sortedChampions[1][0] : null;

  return {
    totalGames: matches.length,
    wins,
    losses,
    kda: (totalKda / matches.length).toFixed(2),
    kills: (totalKills / matches.length).toFixed(1),
    deaths: (totalDeaths / matches.length).toFixed(1),
    assists: (totalAssists / matches.length).toFixed(1),
    mostPlayedChampions: [mostPlayed, secondMostPlayed],
    prefferedRole:
      sortedRoles.length !== 0
        ? rolesToImg[sortedRoles[0][0]]
        : rolesToImg["NONE"],
  };
};
