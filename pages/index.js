import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ProjectList from '../components/Projects/ProjectList'

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 mt-12">
        <h1 className="text-4xl font-bold">Hi, I’m [Tolu ADESANYA]</h1>
        <p className="mt-4 text-lg text-gray-600">
          I’m a computer science graduate building high-performance trading systems and simulations.
        </p>
        <ProjectList />
      </main>
      <Footer />
    </>
  )
}
