import "./StatCard.css";

function StatCard({ title, value, description, icon: Icon, color }) {
  return (
    <div className={`stat-card stat-card--${color}`}>
      <div className="stat-card__icon">
        <Icon size={24} />
      </div>

      <div className="stat-card__content">
        <p className="stat-card__title">{title}</p>

        <p className="stat-card__value">{value}</p>

        <p className="stat-card__description">{description}</p>
      </div>

      <div className="stat-card__chart" aria-hidden="true">
        {/* Mini bar chart will go here */}
      </div>
    </div>
  );
}

export default StatCard;
