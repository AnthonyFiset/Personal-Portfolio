import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden over z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Anthony Fiset</title>
        <meta name="description" content="Anthony Fiset's Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header />

      {/* Hero */}

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
      <WorkExperience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />

      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
        </section>

      {/* Contact */}
      <section id='contact' className='snap-start'>
        <ContactMe />
        </section>

        
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className="flex items-center justify-end pr-20">
            <Link href={'#hero'}>
              <img className='h-10 w-10 rounded-full grayscale hover:grayscale-0 cursor-pointer' src="https://img.icons8.com/fluency/96/null/magical-scroll.png" alt="" />
              </Link>
            </div>
          </footer>


        </div>

  )
}