import reliabilityImg from '@/public/images/reliability.jpg';
import Hero from '@/components/hero';

export default function Reliability() {
  return (
    <div>
      <Hero
        imgData={reliabilityImg}
        imgAlt='Reliable Systems'
        title='Ensure System Reliability'
      />
    </div>
  );
}
