import WhyUs from '@/components/root/WhyUs';
import HeroCarousel from '@/components/root/HeroCarousel';
import Production from '@/components/root/ProductionBrief';

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <WhyUs />
      <Production />
    </main>
  );
}
