import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Gallery from '@/components/sections/gallery';
import Video from '@/components/sections/video';
import Bio from '@/components/sections/bio';
import Contact from '@/components/sections/contact';
import JsonLD from '@/components/seo/jsonld';



export default function Page() {
  return (
    <div>
      <JsonLD />
      <Hero />
      <Projects />
      <Gallery />
      <Video />
      <Bio />
      <Contact />
    </div>
  );
}
