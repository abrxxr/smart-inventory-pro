import { BarChart3, Package, Users, Trophy } from "lucide-react";

const features = [
  { icon: BarChart3, label: "Accurate Demand Forecasts" },
  { icon: Package, label: "Optimized Inventory Levels" },
  { icon: Users, label: "Empowering Small Retailers" },
];

const FooterSection = () => {
  return (
    <section className="py-20 px-4 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary blur-[120px]" />
      </div>
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-8">
          Smart<span className="text-primary">Demand</span> AI
        </h2>
        <div className="space-y-4 mb-10">
          {features.map((f) => (
            <div key={f.label} className="flex items-center justify-center gap-3">
              <f.icon className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">{f.label}</span>
            </div>
          ))}
        </div>
        <div className="gradient-primary rounded-xl p-6 inline-block shadow-glow">
          <div className="flex items-center gap-3 justify-center">
            <Trophy className="w-8 h-8 text-primary-foreground" />
            <div>
              <p className="text-sm text-primary-foreground/80">Transforming Inventory Management</p>
              <p className="text-2xl font-bold font-heading text-primary-foreground">Thank You!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
