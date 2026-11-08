import { Cpu, GraduationCap, Network } from 'lucide-react';
import { profile } from '@/data/profile';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const pillars = [
  {
    icon: Network,
    title: 'Software Engineering',
    text: 'Full-stack platforms with Django, DRF and React — RBAC dashboards, REST APIs and cloud deployments.',
  },
  {
    icon: Cpu,
    title: 'IoT & Automation',
    text: 'MQTT-connected devices, SCADA monitoring and kiosks — software that has to survive the real world.',
  },
  {
    icon: GraduationCap,
    title: 'Teaching & Research',
    text: 'Lecturing on circuits and researching AI + embedded systems for smart, secure environments.',
  },
];

export default function About() {
  const json = {
    name: profile.fullName,
    role: profile.roles[0],
    based_in: profile.location,
    degrees: ['B.Sc. EEE', 'M.Sc. EEE'],
    languages: profile.languages,
    hobbies: profile.hobbies,
  };

  return (
    <Section id="about">
      <SectionHeading index="01" label="about" title={<>Where software meets <span className="text-gradient">hardware</span></>} />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5 text-[15px] leading-relaxed text-slate-400 sm:text-base">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-2 font-mono text-[11px] text-slate-500">~/mohtad — cat profile.json</span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-6">
              <code>
                <span className="text-slate-500">{'{'}</span>
                {'\n'}
                {Object.entries(json).map(([k, v], i, arr) => (
                  <span key={k}>
                    {'  '}
                    <span className="text-volt">"{k}"</span>
                    <span className="text-slate-500">: </span>
                    {Array.isArray(v) ? (
                      <span className="text-slate-300">
                        [{v.map((x, j) => (
                          <span key={x}>
                            <span className="text-amp">"{x}"</span>
                            {j < v.length - 1 ? ', ' : ''}
                          </span>
                        ))}]
                      </span>
                    ) : (
                      <span className="text-amp">"{v}"</span>
                    )}
                    {i < arr.length - 1 ? ',' : ''}
                    {'\n'}
                  </span>
                ))}
                <span className="text-slate-500">{'}'}</span>
              </code>
            </pre>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 90}>
            <div className="card card-hover hud h-full p-6">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg border border-volt/30 bg-volt/10 text-volt">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
