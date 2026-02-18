import { TrendingUp, Package, Target, CheckCircle, AlertTriangle } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { date: "Jan 1", actual: 45, predicted: 48 },
  { date: "Jan 8", actual: 52, predicted: 50 },
  { date: "Jan 15", actual: 38, predicted: 42 },
  { date: "Jan 22", actual: 60, predicted: 57 },
  { date: "Jan 29", actual: 55, predicted: 58 },
  { date: "Feb 5", actual: 48, predicted: 46 },
  { date: "Feb 12", actual: 62, predicted: 60 },
  { date: "Feb 19", actual: null, predicted: 65 },
  { date: "Feb 26", actual: null, predicted: 58 },
];

const kpis = [
  { label: "Predicted Demand", value: "150", unit: "units", icon: TrendingUp },
  { label: "Recommended Stock", value: "165", unit: "units", icon: Package },
  { label: "Accuracy", value: "87", unit: "%", icon: Target },
];

const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-2">
          SmartDemand AI <span className="text-primary">Dashboard</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Demand Insights & Recommendations at Glance
        </p>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="gradient-card border border-border rounded-xl p-6 text-center shadow-card hover:shadow-glow transition-shadow"
            >
              <kpi.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-1">{kpi.label}</p>
              <p className="text-3xl font-bold font-heading text-primary animate-count-up">
                {kpi.value}
                <span className="text-lg text-muted-foreground ml-1">{kpi.unit}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="gradient-card border border-border rounded-xl p-6 shadow-card mb-10">
          <h3 className="text-lg font-semibold font-heading text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Sales & Demand Forecast
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 20% 22%)" />
              <XAxis dataKey="date" stroke="hsl(215 15% 55%)" fontSize={12} />
              <YAxis stroke="hsl(215 15% 55%)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220 25% 14%)",
                  border: "1px solid hsl(220 20% 22%)",
                  borderRadius: "8px",
                  color: "hsl(210 40% 96%)",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="hsl(200 80% 55%)"
                strokeWidth={2}
                dot={{ fill: "hsl(200 80% 55%)", r: 4 }}
                name="Actual Sales"
                connectNulls={false}
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="hsl(152 60% 45%)"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "hsl(152 60% 45%)", r: 4 }}
                name="Predicted Demand"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Insights */}
        <div className="gradient-card border border-border rounded-xl p-6 shadow-card">
          <h3 className="text-lg font-semibold font-heading text-foreground mb-4">
            Insights & Recommendations
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-secondary-foreground">
                <span className="font-medium text-foreground">Current Trend:</span> Increased Weekend Sales
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-secondary-foreground">
                <span className="font-medium text-foreground">Suggested Action:</span> Stock 165 units for next week
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-secondary-foreground">
                <span className="font-medium text-foreground">Risk Level:</span>{" "}
                <span className="inline-flex items-center gap-1 bg-primary/15 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Low Stock Risk
                </span>
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-lg bg-muted border border-border">
            <p className="text-sm text-muted-foreground italic">
              💡 <span className="font-medium text-foreground">Explainability:</span> Prediction increased due to weekend sales trend and seasonal patterns detected in historical data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
