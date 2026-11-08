import type { ComponentType, SVGProps } from 'react';
import { socials } from '@/data/profile';
import {
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  InstagramIcon,
  LinkedinIcon,
  OrcidIcon,
  ResearchGateIcon,
  ScholarIcon,
  XIcon,
} from './BrandIcons';

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export const socialList: { key: keyof typeof socials; label: string; icon: Icon }[] = [
  { key: 'github', label: 'GitHub', icon: GithubIcon },
  { key: 'linkedin', label: 'LinkedIn', icon: LinkedinIcon },
  { key: 'gitlab', label: 'GitLab', icon: GitlabIcon },
  { key: 'googleScholar', label: 'Google Scholar', icon: ScholarIcon },
  { key: 'researchGate', label: 'ResearchGate', icon: ResearchGateIcon },
  { key: 'orcid', label: 'ORCID', icon: OrcidIcon },
  { key: 'instagram', label: 'Instagram', icon: InstagramIcon },
  { key: 'facebook', label: 'Facebook', icon: FacebookIcon },
  { key: 'x', label: 'X', icon: XIcon },
];

/** Only links that have a URL are rendered. */
export const activeSocials = socialList.filter((s) => socials[s.key]).map((s) => ({ ...s, href: socials[s.key] }));

