import ErrorBoundary from '@/components/error/error-boundary';
import { SectionErrorBoundary } from '@/components/error/section-error-boundary';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
// import Gallery from '@/components/sections/gallery';
import Video from '@/components/sections/video';
import Bio from '@/components/sections/bio';
import Contact from '@/components/sections/contact';
import JsonLD from '@/components/seo/jsonld';

export default function Page() {
  return (
    <div>
      <JsonLD />
      
      <SectionErrorBoundary sectionName="Hero">
        <Hero />
      </SectionErrorBoundary>
      
      <SectionErrorBoundary sectionName="Projects">
        <Projects />
      </SectionErrorBoundary>
      
      {/* <SectionErrorBoundary sectionName="Gallery">
        <Gallery />
      // </SectionErrorBoundary> */}
      
      <SectionErrorBoundary sectionName="Video">
        <Video />
      </SectionErrorBoundary>
      
      <SectionErrorBoundary sectionName="Bio">
        <Bio />
      </SectionErrorBoundary>
      
      <SectionErrorBoundary sectionName="Contact">
        <Contact />
      </SectionErrorBoundary>
    </div>
  );
}