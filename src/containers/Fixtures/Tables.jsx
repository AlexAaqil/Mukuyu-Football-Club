import TablesData from "./TablesData";

export default function Tables() {
  return (
    <section className="Tables">
      <h2>Tables</h2>
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>PTS</th>
          </tr>
        </thead>

        <tbody>
          {TablesData.map((row, index) => (
            <tr
              key={index}
              className={row.Team === "Mukuyu FC" ? "my_team" : ""}
            >
              <td>{row.Pos}</td>
              <td>{row.Team}</td>
              <td>{row.MP}</td>
              <td>{row.W}</td>
              <td>{row.D}</td>
              <td>{row.L}</td>
              <td>{row.GF}</td>
              <td>{row.GA}</td>
              <td>{row.GD}</td>
              <td>{row.PTS}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
