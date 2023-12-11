import "./players.scss";
import playersData from "./playersData";

export default function ListPlayers() {
  // Filter and sort players based on category order
  const categoryOrder = ["Goalkeeper", "Defender", "Midfielder", "Forward"];

  const sortedPlayers = playersData
    .filter((player) => categoryOrder.includes(player.category))
    .sort((a, b) => {
      const categoryA = categoryOrder.indexOf(a.category);
      const categoryB = categoryOrder.indexOf(b.category);

      if (categoryA === categoryB) {
        return a.first_name.localeCompare(b.first_name);
      }

      return categoryA - categoryB;
    });

  return (
    <section id="players" className="Players">
      <div className="container">
        {categoryOrder.map((category) => (
          <div key={category}>
            <h1>{category}s</h1>
            <div className="underline"></div>
            <div className="players_list">
              {sortedPlayers
                .filter((player) => player.category === category)
                .map((player) => (
                  <div className="player" key={player.id}>
                    <img src={player.image} alt={`Player ${player.id}`} />
                    <p>
                      <span>{player.first_name}</span>
                      <span>{player.last_name}</span>
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
