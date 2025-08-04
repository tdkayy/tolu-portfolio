export default function ProjectCard({ title, description, link, demo, tech, relevance }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>

      <ul className="mt-2 flex gap-2 flex-wrap text-sm text-blue-600">
        {tech.map((t, i) => (
          <li key={i} className="bg-blue-50 px-2 py-1 rounded">{t}</li>
        ))}
      </ul>

      {relevance && (
        <p className="mt-2 text-sm text-gray-700 italic">{relevance}</p>
      )}

      <div className="flex gap-4 mt-4 items-center">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 font-medium hover:text-blue-600 transition"
          >
            View Code →
          </a>
        )}
        {demo === "comingsoon" ? (
          <span className="text-gray-400 italic">Demo coming soon</span>
        ) : (
          demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-medium hover:text-blue-600 transition"
            >
              Watch Demo →
            </a>
          )
        )}
      </div>
    </div>
  );
}
