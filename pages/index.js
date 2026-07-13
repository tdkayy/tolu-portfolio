import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import profilePic from '../public/static/images/me.jpeg'
import { Analytics } from "@vercel/analytics/next"

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
          I am driven by an intense curiosity about how systems scale under pressure. Because I am actively bridging the gap between academic theory and commercial application, I focus heavily on the &quot;why&quot; and the &quot;how&quot; behind the architecture I design. How do we prevent race conditions during concurrent data execution? Will the next developer understand my code without needing a handover? These are the pragmatic questions that shape my approach to problem-solving.         
        <br />
        <br />
        My goal is to develop robust, fault-tolerant infrastructure. I am actively seeking a rigorous, collaborative environment where I can immerse myself in scalable backend development, contribute to data-intensive systems, and continuously learn from a team of experienced specialists.        <br />
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