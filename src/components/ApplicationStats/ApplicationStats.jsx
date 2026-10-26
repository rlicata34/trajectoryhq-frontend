import { FileText, CalendarDays, Trophy, ChartPie } from "lucide-react";
import StatCard from "../StatCard/StatCard";

import "./ApplicationStats.css";

function ApplicationStats() {
  return (
    <section className="application-stats" aria-label="Application statistics">
      <StatCard
        title="Total Applications"
        value={24}
        description="+4 this week"
        icon={FileText}
        color="blue"
      />

      <StatCard
        title="Interviewing"
        value={3}
        description="1 upcoming"
        icon={CalendarDays}
        color="orange"
      />

      <StatCard
        title="Offers"
        value={0}
        description="Keep pushing"
        icon={Trophy}
        color="green"
      />

      <StatCard
        title="Response Rate"
        value="25%"
        description="+5% this month"
        icon={ChartPie}
        color="purple"
      />
    </section>
  );
}

export default ApplicationStats;
