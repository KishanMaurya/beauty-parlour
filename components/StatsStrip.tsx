import { stats } from "@/lib/data";

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      {stats.map((stat) => (
        <div key={stat.label} className="fade-in">
          <span className="stat-num" data-count={stat.count}>
            0
          </span>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
