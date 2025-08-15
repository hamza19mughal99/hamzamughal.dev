import React, { useEffect, useState } from "react";

const GitHubContributions = () => {
  const [weeks, setWeeks] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 👇 yahan apna real token lagao (testing only; production me mat rakho)
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN || "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"}`,
          },
          body: JSON.stringify({
            query: `
              query($login:String!) {
                user(login: $login) {
                  contributionsCollection {
                    contributionCalendar {
                      weeks {
                        contributionDays {
                          date
                          contributionCount
                          color
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables: { login: import.meta.env.VITE_GITHUB_USERNAME || "hamza19mughal99" },
          }),
        });

        // network/HTTP level
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status} — ${text}`);
        }

        const json = await res.json();

        // GraphQL-level errors
        if (json.errors?.length) {
          throw new Error(json.errors.map(e => e.message).join("; "));
        }

        const data = json.data;
        setWeeks(data.user.contributionsCollection.contributionCalendar.weeks);
      } catch (e) {
        setErr(e.message);
        console.error("GitHub GraphQL error:", e);
      }
    };

    fetchContributions();
  }, []);

  if (err) return <p style={{ color: "salmon" }}>Failed: {err}</p>;

  return (
    <div style={{ display: "flex" }}>
      {weeks.map((week, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column" }}>
          {week.contributionDays.map((day, j) => (
            <div
              key={j}
              title={`${day.date}: ${day.contributionCount} contributions`}
              style={{
                width: 12,
                height: 12,
                margin: 1,
                backgroundColor: day.color || "#161b22",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GitHubContributions;
