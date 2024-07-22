import Navbar from './_components/Nav'
import Login from './_components/Login/Login'
import laptop from './../public/laptop.jpg'
import Text from './_components/Text'
import Header from './_components/Header'
import Button from './_components/Buttons/Button'
import Hero from './Section/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
    </main>
  )
}
