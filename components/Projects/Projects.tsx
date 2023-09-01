'use client';

import React, { useState } from 'react'
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  github_url: string;
  technology: string[];
  images: string[];
}

const Projects: React.FC = () => {

  const [open, setOpen] = useState<boolean>(false);
  const [viewProject, setViewProject] = useState<Project | null>(null);
  const [technology, setTechnology] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]); // 

  const openProject = (item: Project) => {
    setViewProject(item);
    setTechnology(item.technology);
    setImages(item.images);
    setOpen(true);
  };
  
  const projects: Project[] = [
    {
      id: 1,
      icon: "LG",
      title: "Lingosta",
      subtitle: "Language learning app that uses AI to translate sentences",
      description: "Lingosta is an langauge learning app that uses AI functionality to translate sentences seamlessly into flashcards from 9 different langauges.",
      url: "https://www.lingosta.app/",
      github_url: "https://github.com/leejustin/lingosta",
      technology: ["Next.js", "Typescript", "Appwrite Cloud", "OpenAI API"],
      images: ["/projects/lingosta/lingosta1.png", "/projects/lingosta/lingosta2.png", "/projects/lingosta/lingosta3.png", "/projects/lingosta/lingosta4.png", "/projects/lingosta/lingosta5.png" ]
  },
    {
        id: 2,
        icon: "AS",
        title: "AniSen",
        subtitle: "AniList clone that allows live search and filtering",
        description: "AniSen is an anime database app that allows users to view top rated anime shows and search from thousands of existing titles.",
        url: "https://senanilist.vercel.app/",
        github_url: "https://github.com/aznamle/AnimeList",
        technology: ["React", "Redux ToolKit", "React-Router", "TailwindCSS"],
        images: ["/projects/senanilist/senanilist1.png", "/projects/senanilist/senanilist2.png", "/projects/senanilist/senanilist3.png", ]
    },
    {
        id: 5,
        icon: "CF",
        title: "CarbnForme",
        subtitle: "Front-end website to promote CarbnForme designed products.",
        description: "CarbnForme is about creating ideas from the foundation and fundamentals that we have amassed throughout the years of combined experience makes us, and others, believe in what we do. Passion and pride in design are what is at the heart of CARBN FORME.",
        url: "https://carbnforme.vercel.app/",
        github_url: "https://github.com/aznamle/carbnforme",
        technology: ["React", "Next.js", "Prismic", "TailwindCSS"],
        images: ["/projects/carbnforme/carbnforme1.png", "/projects/carbnforme/carbnforme2.png", "/projects/carbnforme/carbnforme3.png", "/projects/carbnforme/carbnforme4.png", ]
    },
    {
        id: 4,
        title: "Brandcreative Inc.",
        icon: "BC",
        subtitle: "Brandcreative Inc. front-end designed to inform clients about the marketing agency.",
        description: "Brandcreative Inc. is a marketing agency with diverse range of skills needed to build a brand's voice beyond promotion. The team is built of strategists, designers, and digital sociologists. In harnessing the power and speed of technology, their goal is to exceed the needs of clients in situations that require creative solutions.",
        url: "https://brandcreativeinc.com/",
        github_url: "https://github.com/aznamle/brandcreative",
        technology: ["React", "Next.js", "Prismic", "TailwindCSS"],
        images: ["/projects/brandcreative/bc1.png", "/projects/brandcreative/bc2.png", "/projects/brandcreative/bc3.png", "/projects/brandcreative/bc4.png"]

    },
    {
        id: 5,
        title: "Cryptoverse",
        icon: "CV",
        subtitle: "Dashboard showing information about cryptocurrencies.",
        description: "Cryptoverse is an app that displays statistics, news, and trends about cryptocurrencies. It utilizes cryptocurrency API and Bing news API to show the latest stats and news.",
        url: "https://cryptoverse-aznamle.vercel.app/",
        github_url: "https://github.com/aznamle/cryptoverse",
        technology: ["React", "Redux Toolkit", "Chart.js", "Antd", ],
        images: ["/projects/cryptoverse/cryptoverse1.png", "/projects/cryptoverse/cryptoverse2.png", "/projects/cryptoverse/cryptoverse3.png", "/projects/cryptoverse/cryptoverse4.png" ]

    },
    {
        id: 6,
        title: "Crown Store",
        icon: "CS",
        subtitle: "E-commerce app focusing on clothing apparel.",
        description: "Crown Store is a e-commerce app utilizing Firebase as authenticated log-in and allows users to add clothing items to their cart and check out.",
        url: "https://aznamle-crwn-live.herokuapp.com/",
        github_url: "https://github.com/aznamle/crwnstore",
        technology: ["React", "Redux", "Firebase", "Styled Components", ],
        images: ["/projects/crwnstore/crwnstore1.png", "/projects/crwnstore/crwnstore2.png", "/projects/crwnstore/crwnstore3.png", "/projects/crwnstore/crwnstore4.png" ]
    },
  ]
    return (
      <div className='mx-auto max-w-5xl space-y-2 px-4 md:px-0 py-12'>
        <h1 className='text-gray-900 text-3xl font-bold'>Projects</h1>
        <p className='text-gray-700 text-xl pb-6'>Here are some of my projects that I have worked on. Feel free to check them out.</p>
        <div className='mx-auto grid md:grid-cols-2 gap-10 px-2 md:px-0 text-gray-900'>
          {projects.map(item => (
            <div className='flex items-center text-left mx-auto justify-center space-x-4' key={item.id}>
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gray-800 sm:mx-0 ">
                <p className='text-white text-3xl font-bold'>{item.icon}</p>
              </div>
              <div className='border-b pb-4 flex items-center border-gray-300'>
                <div>
                  <h1 className='font-semibold text-xl'>
                    {item.title} 
                  </h1>
                  <p className='text-gray-700'>
                    {item.subtitle}
                  </p>
                </div>
                <div>
                  <button 
                    className='bg-gray-200 transition ease-in-out duration-300 hover:bg-gray-400 py-5 px-6 rounded-3xl ml-4 md:ml-12'
                    onClick={() => openProject(item)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        { viewProject && 
            <ProjectModal 
              open={open} 
              setOpen={setOpen} 
              item={viewProject} 
              technology={technology} 
              images={images} 
            /> 
        }
      </div>
    )
  }

export default Projects