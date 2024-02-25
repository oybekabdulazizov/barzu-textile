import HeroCarousel from '@/components/root/HeroCarousel';
import OurMission from '@/components/root/OurMission';
import Map from '@/components/root/MainMap';
import ProductionBriefInfo from '@/components/root/ProductionBriefInfo';

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <ProductionBriefInfo />
      <OurMission />
      <Map />
    </main>
  );
}
