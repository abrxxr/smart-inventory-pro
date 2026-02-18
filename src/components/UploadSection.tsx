import { Upload, FileSpreadsheet } from "lucide-react";
import { useState } from "react";

const sampleData = [
  { date: "2024-01-01", productId: "P001", sales: 45 },
  { date: "2024-01-02", productId: "P001", sales: 52 },
  { date: "2024-01-03", productId: "P001", sales: 60 },
  { date: "2024-01-04", productId: "P001", sales: 50 },
];

const UploadSection = () => {
  const [uploaded, setUploaded] = useState(false);

  return (
    <section id="upload" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-2">
          Upload <span className="text-primary">Sales</span> Data
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Upload Your Historical Sales Data (CSV)
        </p>

        <div className="gradient-card border border-border rounded-xl p-8 shadow-card">
          {/* Drop zone */}
          <div
            onClick={() => setUploaded(true)}
            className="border-2 border-dashed border-border rounded-lg p-10 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors mb-6"
          >
            <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
            <p className="text-foreground font-medium">Drag & Drop or Browse File</p>
            <p className="text-sm text-muted-foreground mt-1">CSV files only</p>
          </div>

          {/* Sample data table */}
          {uploaded && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <FileSpreadsheet className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Uploaded Data</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-4 text-muted-foreground font-medium">Date</th>
                      <th className="text-left py-2 px-4 text-muted-foreground font-medium">Product ID</th>
                      <th className="text-left py-2 px-4 text-muted-foreground font-medium">Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map((row, i) => (
                      <tr key={i} className="border-b border-border/50">
                        <td className="py-2 px-4 text-secondary-foreground">{row.date}</td>
                        <td className="py-2 px-4 text-secondary-foreground">{row.productId}</td>
                        <td className="py-2 px-4 text-secondary-foreground">{row.sales}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="mt-6 gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-glow w-full sm:w-auto">
                Upload & Analyze
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
