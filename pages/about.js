import Image from 'next/image'
import profilePic from '../public/static/images/me.jpeg'

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-4 mt-12">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-gray-700 leading-relaxed space-y-4">
        My interest in tech comes from a deep, driven optimism, a belief that technology can help build a better world for the generations to come. This long-term vision has motivated me to take on a range of ambitious projects and learning opportunities. Whether I’m writing low-latency Rust for a trading engine, integrating financial APIs for smoother data flows, or automating physical systems with sensors and microcontrollers, my goal is always the same: build with purpose.         
        <br />
        <br />
        I see myself as an engineer who’s increasingly focused on the “why” behind the systems I build, not just the novelty of a “cool” project. What problem is this solving? Who is it for? Will the next developer understand my code without needing a handover? These are the questions that shape my thinking and influence how I design, structure, and document my work.          
        <br />
        <br />
        I find myself gravitating toward projects that create long-term utility, clean APIs, real-time systems, infrastructure tools. That’s where I see the future of my contribution, whether it’s in fintech, IoT, or public sector innovation. I’m not here to build for the sake of building, I’m here to create systems that matter.
        </p>
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
          <Image
            src={profilePic}
            alt="Tolu Adesanya"
            width={128}
            height={128}
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  )
}
