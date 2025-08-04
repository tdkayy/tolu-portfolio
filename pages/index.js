import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ProjectList from '../components/Projects/ProjectList'

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 mt-12">
        <h1 className="text-4xl font-bold">Hello, I’m Tolu </h1>
        <p className="mt-4 text-lg text-gray-600">
        An aspiring full-stack developer focused on building tools that are scalable, human-centred, and purpose-driven. My long-term mission is to develop the infrastructure that empowers communities, starting here in London, and one day reaching my home country, Nigeria.       </p>
        <ProjectList />
      </main>
      <Footer />
    </>
  )
}
