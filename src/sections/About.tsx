import { profile } from '@/data/profile';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <Reveal className="space-y-4 leading-relaxed text-muted">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Reveal>
    </Section>
  );
}
