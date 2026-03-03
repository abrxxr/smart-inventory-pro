import { BarChart3, Upload } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="gradient-hero min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent blur-[120px]" />
      </div>
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-4 animate-fade-in">
            Smart<span className="text-primary">Demand</span> AI
          </h1>
          <p className="text-lg text-muted-foreground mb-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Demand Forecasting & Inventory Optimization System
          </p>
          <p className="text-xl text-secondary-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Predict Demand. Optimize Inventory. Maximize Profit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => scrollTo("upload")}
              className="gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity shadow-glow"
            >
              <Upload className="w-5 h-5" />
              Upload Sales Data
            </button>
            <button
              onClick={() => scrollTo("dashboard")}
              className="border border-border bg-secondary text-secondary-foreground font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-muted transition-colors"
            >
              <BarChart3 className="w-5 h-5" />
              View Dashboard
            </button>
          </div>
        </div>
        <div className="flex-1 max-w-md animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <img src={heroIllustration} alt="SmartDemand AI - Retail analytics illustration" className="w-full rounded-xl shadow-card" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
