import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectList from '../components/projects/projectList'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 mt-12">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-3 text-lg opacity-90">
          An aspiring full-stack developer focused on building tools that are scalable, human-centred, and purpose-driven.
        </p>

        <div className="mt-10">
          <ProjectList />
        </div>

        {/* home bottom */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="px-5 py-3 rounded-md border border-gray-300 hover:bg-gray-100 
            dark:border-gray-700 dark:hover:bg-gray-800 
            transition text-sm font-medium"
          >
            ← Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
