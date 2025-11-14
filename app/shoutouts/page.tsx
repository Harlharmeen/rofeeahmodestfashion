import ShoutoutHero from "@/components/sections/shoutouts/ShoutoutHero";
import FeaturedShoutout from "@/components/sections/shoutouts/FeaturedShoutout";
import CommunityGallery from "@/components/sections/shoutouts/CommunityGallery";
import SubmissionForm from "@/components/sections/shoutouts/SubmissionForm";
import CommunityCTA from "@/components/sections/shoutouts/CommunityCTA";

export default function ShoutoutsPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      <ShoutoutHero />
      <FeaturedShoutout />
      <CommunityGallery />
      <SubmissionForm />
      <CommunityCTA />
    </main>
  );
}
