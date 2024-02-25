import HeroCarousel from '@/components/root/HeroCarousel';
import OurMission from '@/components/root/OurMission';
import Map from '@/components/root/MainMap';
import ProductionBriefInfo from '@/components/root/ProductionBriefInfo';
import WhyUs from '@/components/root/WhyUs';

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <ProductionBriefInfo />
      <OurMission />
      <WhyUs />
      <Map />
    </main>
  );
}
