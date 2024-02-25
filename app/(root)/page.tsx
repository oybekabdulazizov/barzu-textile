import WhyUs from '@/components/root/WhyUs';
import HeroCarousel from '@/components/root/HeroCarousel';
import Production from '@/components/root/ProductionBrief';
import OurMission from '@/components/root/OurMission';

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <WhyUs />
      <Production />
      <OurMission />
    </main>
  );
}
