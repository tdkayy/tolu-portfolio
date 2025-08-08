import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import profilePic from '../public/static/images/me.jpeg'

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 mt-12 text-center">
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
            <Image
              src={profilePic}
              alt="Tolu Adesanya"
              width={400}
              height={400}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h1 className="text-3xl font-bold">My Story</h1>
          <p className="leading-relaxed opacity-90 text-left">
          My interest in tech comes from a deep, driven optimism, a belief that technology can help build a better world for the generations to come. This long-term vision has motivated me to take on a range of ambitious projects and learning opportunities. Whether I’m writing low-latency Rust for a trading engine, integrating financial APIs for smoother data flows, or automating physical systems with sensors and microcontrollers, my goal is always the same. To build with purpose.         
        <br />
        <br />
        I see myself as an engineer who’s increasingly focused on the “why” behind the systems I build, not just the novelty of a “cool” project. What problem is this solving? Who is it for? Will the next developer understand my code without needing a handover? These are the questions that shape my thinking and influence how I design, structure, and document my work.          
        <br />
        <br />
        I find myself gravitating toward projects that create long-term utility, clean APIs, real-time systems, infrastructure tools. That’s where I see the future of my contribution, whether it’s in fintech, IoT, or public sector innovation. I’m not here to build for the sake of building, I’m here to create systems that matter.
          </p>
        </div>

        {/*projects button*/}
        <div className="mt-8">
          <Link
            href="/projects"
            className="px-5 py-3 rounded-md border border-gray-300 hover:bg-gray-100 
            dark:border-gray-700 dark:hover:bg-gray-800 
            transition text-sm font-medium"
     >
            View Projects →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
