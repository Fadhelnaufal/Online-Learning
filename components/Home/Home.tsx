import React from 'react'
import Hero from './Hero'
import Company from './Company'
import Cloud from './Cloud'
import ClassroomSection from './ClassroomSection'
import About from './About'
import Features from './Features'
import Tools from './Tools'
import Assesment from './Assesment'
import ClassManagement from './ClassManagement'
import Integrations from './Integrations'

const Home = () => {
  return (
    <div className='h-full overflow-hidden'>
        <Hero />
        <Company />
        <Cloud />
        <About />
        <ClassroomSection />
        <Features />
        <Tools />
        <Assesment />
        <ClassManagement />
        <Tools />
        <Integrations />
    </div>
  )
}

export default Home