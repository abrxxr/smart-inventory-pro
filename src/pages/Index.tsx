import HeroSection from "@/components/HeroSection";
import DashboardSection from "@/components/DashboardSection";
import UploadSection from "@/components/UploadSection";
import ModelPerformanceSection from "@/components/ModelPerformanceSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DashboardSection />
      <UploadSection />
      <ModelPerformanceSection />
      <ArchitectureSection />
      <FooterSection />
    </div>
  );
};

export default Index;
