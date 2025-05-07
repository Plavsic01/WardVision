import MatchTable from "./MatchTable";
import { v4 as uuidv4 } from "uuid";

const MatchDetails = ({ match }) => {
  return (
    <article>
      {match.teams.map((team, indx) => (
        <MatchTable
          key={uuidv4()}
          team={team}
          gameType={match.gameType}
          teamSide={indx}
        />
      ))}
    </article>
  );
};

export default MatchDetails;
