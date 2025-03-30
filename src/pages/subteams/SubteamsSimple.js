import Data from "./assets/data.json"

const SubteamsSimple = () => {
  console.log("SubteamsSimple rendering", Data)

  return (
    <div
      style={{
        backgroundColor: "#0f1923",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Our Teams</h1>

      {Data.teams.map((team) => (
        <div
          key={team.name}
          style={{
            backgroundColor: "#1e2a3a",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                marginRight: "15px",
                backgroundColor: "#90dcf4",
                borderRadius: "50%",
              }}
            ></div>
            <h2 style={{ margin: 0 }}>{team.name}</h2>
          </div>

          <p style={{ marginBottom: "20px" }}>{team.description}</p>

          {team.subteams.map((subteam) => (
            <div
              key={subteam.name}
              style={{
                backgroundColor: "#4a7dbd",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "10px" }}>{subteam.name}</h3>
              <p style={{ margin: 0 }}>{subteam.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default SubteamsSimple

