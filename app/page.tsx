import Contact from '@/components/Contact'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects/Projects'
import ScrollToTop from '@/components/ScrollToTop'
import Skills from '@/components/Skills'
import TimeLine from '@/components/TimeLine'

export default function Home() {
  return (
    <div className='space-y-16'>
      <Intro />
      <Skills />
      <Projects />
      <TimeLine />
      <Contact />
      <ScrollToTop />
    </div>
  )
}
