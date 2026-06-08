// app/about/page.js
import AboutPage from '../_components/AboutPage'
import DynamicGym from '../_components/DynamicGym'

export const metadata = {
  title: 'About Us | PrimalTraining',
  description: 'Learn about PrimalTraining — raw strength, functional fitness, and community.',
}

export default function About() {
  return (
    <>
      <AboutPage />
      <DynamicGym />
    </>
  )
}