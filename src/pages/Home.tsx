import Intro from '@/sections/Intro';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import { Awards, Education, Leadership, Research, Skills } from '@/sections/Profile';
import { GalleryStrip, Writing } from '@/sections/Previews';
import Contact from '@/sections/Contact';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export default function Home() {
  useDocumentTitle();
  return (
    <div className="container-narrow">
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <Awards />
      <Leadership />
      <Education />
      <Writing />
      <GalleryStrip />
      <Contact />
    </div>
  );
}
