import Navbar from "@/components/layout/Navbar";
import TrainingHero from "@/components/training/TrainingHero";
import TrainingPreview from "@/components/training/TrainingPreview";
import TrainingTopics from "@/components/training/TrainingTopics";
import TrainersSection from "@/components/training/TrainersSection";
import TrainingBooking from "@/components/training/TrainingBooking";
import Footer from "@/components/layout/Footer";

export default function TrainingPage() {
  return (
    <main>
        <Navbar />
      <TrainingHero />
      <TrainingPreview />
      <TrainingTopics />
      <TrainersSection />
      <TrainingBooking />
      <Footer/>
    </main>
  );
}