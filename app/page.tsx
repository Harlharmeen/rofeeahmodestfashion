import Hero from "@/components/sections/home/Hero";
import SignatureStyles from "@/components/sections/home/SignatureStyles";
import NativeOwambe from "@/components/sections/home/NativeOwambe";
import Accessories from "@/components/sections/home/AccessoriesSpotlight";
import CustomerShoutout from "@/components/sections/home/CustomerShoutout";
import LearnWithUs from "@/components/sections/home/LearnWithUs";
import NewsletterCTA from "@/components/sections/home/NewsletterCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SignatureStyles />
      <NativeOwambe />
      <Accessories />
      <CustomerShoutout />
      <LearnWithUs />
      <NewsletterCTA />
    </div>
  );
}
