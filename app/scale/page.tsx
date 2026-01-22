import scaleImg from '@/public/images/scale.jpg';
import Hero from '@/components/hero';

export default function Scale() {
  return (
    <div>
      <Hero
        imgData={scaleImg}
        imgAlt='Scalable Systems'
        title='Ensure System Scalability'
      />
    </div>
  );
}
