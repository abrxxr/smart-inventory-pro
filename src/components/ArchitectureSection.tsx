import { ArrowRight, Database, Cog, Brain, BarChart3 } from "lucide-react";

const steps = [
  { icon: Database, label: "Sales Data (CSV)", color: "text-accent" },
  { icon: Cog, label: "Data Preprocessing & Feature Engineering", color: "text-warning" },
  { icon: Brain, label: "ML Model (XGBoost & LSTM)", color: "text-primary" },
  { icon: BarChart3, label: "Demand Prediction", color: "text-primary" },
];

const ArchitectureSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-2">
          System <span className="text-primary">Architecture</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">SmartDemand AI Pipeline</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 md:gap-4">
              <div className="gradient-card border border-border rounded-xl p-5 shadow-card text-center min-w-[150px] hover:shadow-glow transition-shadow">
                <step.icon className={`w-8 h-8 ${step.color} mx-auto mb-2`} />
                <p className="text-sm font-medium text-foreground">{step.label}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 rotate-90 md:rotate-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
