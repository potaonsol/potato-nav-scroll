import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import PotatoSection from "@/components/PotatoSection";
import KetchSection from "@/components/KetchSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <PotatoSection />
      <KetchSection />
    </div>
  );
};

export default Index;
