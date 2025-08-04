import ProjectCard from './projectCard'

const projects = [
  {
    title: 'Finance Tracker Dashboard',
    description: 'A personal expense tracking dashboard built using the Expensify API. It fetches, categorizes, and visualizes transactions in real time, helping users simplify how they manage and reflect on their spending.',
    link: 'https://github.com/tdkayy/adesanya-banking',
    demo: 'comingsoon',
    tech: ['React', 'Typescript', 'Expensify API', 'Tailwind CSS', 'OAuth', 'REST'],
    relevance: 'I built this project to explore how APIs can power simple yet meaningful financial workflows. It also reflects my belief that personal finance tools should be accessible, low-friction, and visually intuitive, principles I see mirrored in Expensify’s mission.',
  },
  {
    title: 'Limit Order Book Engine',
    description: 'A performant, real-time trading engine that simulates buy/sell order matching using FIFO logic. Designed for low-latency execution and high-frequency simulation.',
    link: 'https://github.com/tdkayy/limit-order-book-engine',
    demo: 'comingsoon',
    tech: ['Rust', 'React', 'WebSockets', 'Redis', 'Property Testing', 'Flamegraph', 'REST API'],
    relevance: 'An ongoing project that taught me how to design scalable systems under performance constraints. I gained experience in stateful backend logic, concurrency, and real-time streaming, all of which translate to building fast, reliable financial tools at scale.',
  },  {
    title: 'Enlighten - IoT Light Therapy System',
    description: 'A smart lighting system built with embedded sensors and real-time automation logic, designed to reduce seasonal depression and improve sleep cycles through responsive light therapy.',
    link:"https://github.com/tdkayy/enlighten-project",
    demo:"https://www.youtube.com/watch?v=0syyQ7u4Btc",
    tech: ['ESP32', 'C++', 'MQTT', 'VEML7700 Sensor', 'Adafruit', 'PubSubCLient', 'Embedded Systems'],
    relevance: 'Enlighten was my first true hardware-software integration project. I designed the system from scratch, wrote real-time logic to handle edge conditions (e.g. off-hours vs ambient light), and used MQTT to manage cross-system communication. It deepened my understanding of stateful embedded systems, physical UX, and fault-tolerant control loops, all key foundations for scalable backend logic.',
  },
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
