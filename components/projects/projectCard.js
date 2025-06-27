export default function ProjectCard({ title, description, link, tech }) {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
        <ul className="mt-2 flex gap-2 flex-wrap text-sm text-blue-600">
          {tech.map((t, i) => <li key={i} className="bg-blue-50 px-2 py-1 rounded">{t}</li>)}
        </ul>
        <a href={link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-blue-500 hover:underline">
          View Code →
        </a>
      </div>
    )
  }
  