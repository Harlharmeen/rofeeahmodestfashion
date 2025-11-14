import AboutHero from "@/components/sections/about/AboutHero";
import BrandStory from "@/components/sections/about/BrandStory";
import ValuesMission from "@/components/sections/about/ValuesMission";
import MeetDesigner from "@/components/sections/about/MeetDesigner";
import ContactSection from "@/components/sections/about/ContactSection";
import AboutCTA from "@/components/sections/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-[#F7EDE2] text-[#6B4226]">
      <AboutHero />
      <BrandStory />
      <ValuesMission />
      <MeetDesigner />
      <ContactSection />
      <AboutCTA />
    </main>
  );
}
