import Navbar from './_components/Nav'
import Hero from './Section/Hero'
import HowItWorks from './Section/HowItWorks';
import JoinAsTeacher from './Section/JoinAsTeacher';
import OurFeatures from './Section/OurFeatures'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <OurFeatures />
      <HowItWorks/>
      <JoinAsTeacher/>
    </main>
  )
}
