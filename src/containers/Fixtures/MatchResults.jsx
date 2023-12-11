import MatchesData from "./MatchesData";

export default function MatchResults() {
  return (
    <section className="UpComingMatches">
      <h2>Results</h2>
      <div className="MatchesList">
        {MatchesData.map((match, index) => (
          <div className="Match" key={index}>
            <div className="header">
              <h3>
                {match.date} | {match.league}
              </h3>
            </div>
            <div className="body">
              <p>{match.team1}</p>
              <span>{match.score1} - {match.score2}</span>
              <p>{match.team2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}