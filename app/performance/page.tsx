import performanceImg from '@/public/images/performance.jpg';
import Hero from '@/components/hero';

export default function Performance() {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt='Performance Optimization'
        title='Optimize Your App Performance'
      />
    </div>
  );
}
