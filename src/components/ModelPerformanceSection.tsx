import { Brain, Cpu, CheckCircle } from "lucide-react";

const ModelPerformanceSection = () => {
  return (
    <section id="model" className="py-20 px-4 bg-background">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-2">
          Model <span className="text-primary">Performance</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Model Accuracy & Metrics
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Accuracy */}
          <div className="gradient-card border border-border rounded-xl p-8 shadow-card text-center">
            <p className="text-sm text-muted-foreground mb-2">Prediction Accuracy</p>
            <p className="text-6xl font-bold font-heading text-primary mb-2">87%</p>
            <div className="w-full bg-muted rounded-full h-2 mt-4">
              <div className="bg-primary h-2 rounded-full" style={{ width: "87%" }} />
            </div>
          </div>

          {/* Error Metrics */}
          <div className="gradient-card border border-border rounded-xl p-8 shadow-card text-center">
            <p className="text-sm text-muted-foreground mb-4">Error Metrics</p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground">RMSE</p>
                <p className="text-3xl font-bold font-heading text-accent">12.4</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">MAE</p>
                <p className="text-3xl font-bold font-heading text-accent">8.6</p>
              </div>
            </div>
          </div>
        </div>

        {/* Models Used */}
        <div className="gradient-card border border-border rounded-xl p-8 shadow-card mt-6">
          <p className="text-sm text-muted-foreground mb-4 text-center">Models Used</p>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="flex items-center gap-2 bg-muted px-5 py-3 rounded-lg border border-border">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">XGBoost</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-5 py-3 rounded-lg border border-border">
              <Cpu className="w-5 h-5 text-accent" />
              <span className="font-semibold text-foreground">LSTM</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-primary">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Trained for Demand Forecasting</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelPerformanceSection;
