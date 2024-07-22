import Navbar from './_components/Nav'
import Hero from './Section/Hero'
import HowItWorks from './Section/HowItWorks';
import JoinAsTeacher from './Section/JoinAsTeacher';
import OurFeatures from './Section/OurFeatures'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <OurFeatures />
      <HowItWorks/>
      <JoinAsTeacher/>
    </main>
  )
}
