import LeaderboardProgressBar from "@/components/leaderboard";

export default function Fin() {
  const players = [
    { name: "Vatsal", result: { time: "chdbj", words: 78 } },
    { name: "Ruchik", result: { time: "chdbj", words: 7 } },
  ];
  return (
    <div>
      <h1>jfjs</h1>
      <LeaderboardProgressBar players={players} />
    </div>
  );
}
