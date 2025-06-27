import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Limit Order Book Engine',
    description: 'A performant OCaml-based LOB with FIFO matching, simulated market flow, and latency profiling.',
    link: 'https://github.com/tdkayy/limit-order-book',
    tech: ['OCaml', 'Property Testing', 'Latency Benchmarks']
  },
  {
    title: 'Monte Carlo Option Pricer',
    description: 'Vanilla and exotic option pricer with Delta, Vega, and implied vol surfaces.',
    link: 'https://github.com/tdkayy/option-pricer',
    tech: ['C++', 'Monte Carlo', 'Greeks']
  }
]

export default function ProjectList() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6">
      {projects.map((proj, i) => (
        <ProjectCard key={i} {...proj} />
      ))}
    </div>
  )
}
