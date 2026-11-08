import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Research from '@/sections/Research';
import Skills from '@/sections/Skills';
import Awards from '@/sections/Awards';
import Leadership from '@/sections/Leadership';
import Education from '@/sections/Education';
import WritingPreview from '@/sections/WritingPreview';
import GalleryPreview from '@/sections/GalleryPreview';
import Contact from '@/sections/Contact';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export default function Home() {
  useDocumentTitle();
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <Awards />
      <Leadership />
      <Education />
      <WritingPreview />
      <GalleryPreview />
      <Contact />
    </>
  );
}
