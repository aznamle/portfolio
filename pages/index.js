import React from 'react'

import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Project from '../components/Projects/Project'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'
import ScrollToTop from '../components/ScrollToTop'

export default function Home({ about, projects, skills, experience, education }) {

  return (
    <div className='space-y-8'>
      <Intro about={about[0]} />
      <Skills skills={skills} id="skills" />
      <Project project={projects} id="projects"/>
      <div className="md:flex max-w-5xl mx-auto py-6 px-4 md:px-0" id="experiences">
        <Timeline props={experience} title={experience.role} subtitle={experience.company} head="Experience" />
        <Timeline props={education} title={education.school} subtitle={education.major} head="Education" />
      </div>
      <Contact />
      <ScrollToTop />
    </div>
  )
}


export async function getServerSideProps() {

  const [projectsRes, aboutRes, skillsRes, experienceRes, educationRes] = await Promise.all([
    fetch('https://namnomdev.vercel.app/api/projects'),
    fetch('https://namnomdev.vercel.app/api/about'),
    fetch('https://namnomdev.vercel.app/api/skills'),
    fetch('https://namnomdev.vercel.app/api/experience'),
    fetch('https://namnomdev.vercel.app/api/education'),
  ])
  
  const [projects, about, skills, experience, education] = await Promise.all([
    projectsRes.json(),
    aboutRes.json(),
    skillsRes.json(),
    experienceRes.json(),
    educationRes.json(),
  ])
  

  return {
      props: {
          projects,
          about,
          skills,
          experience,
          education,
      },
  }
}
