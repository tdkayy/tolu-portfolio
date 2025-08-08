export default function ProjectCard({ title, description, link, demo, tech, relevance }) {
  return (
    <div
      className="rounded-xl border p-5 shadow-sm
                 bg-[var(--card-bg)] border-[var(--card-border)]"
    >
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 opacity-90">{description}</p>

      {/*tech i used*/}
      <ul className="mt-3 flex gap-2 flex-wrap text-sm">
        {tech.map((t, i) => {
          const href = TECH_LINKS[t];
          const chip = (
            <span
              className="px-2 py-1 rounded
                         bg-blue-50 text-blue-700/90
                         dark:[--tw-bg-opacity:0.12] dark:bg-blue-500/10 dark:text-blue-300
                         hover:underline underline-offset-2"
              style={{ textDecoration: 'none' }} 
            >
              {t}
            </span>
          );
          return (
            <li key={i}>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t} docs`}
                  style={{ textDecoration: 'none' }}
                >
                  {chip}
                </a>
              ) : (
                chip
              )}
            </li>
          );
        })}
      </ul>

      {relevance && (
        <p className="mt-2 text-sm italic opacity-80">{relevance}</p>
      )}

      <div className="flex gap-4 mt-4 items-center flex-wrap">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-md border transition text-sm font-medium
                       hover:bg-gray-100 dark:hover:bg-gray-800
                       border-[var(--card-border)]"
          >
            View Code
          </a>
        )}
        {demo === 'comingsoon' ? (
          <span className="italic opacity-70">Demo coming soon</span>
        ) : (
          demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-md border transition text-sm font-medium
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         border-[var(--card-border)]"
            >
              Watch Demo
            </a>
          )
        )}
      </div>
    </div>
  );
}

/*learn about the tech i used*/
const TECH_LINKS = {
  React: 'https://react.dev/learn',
  Typescript: 'https://www.typescriptlang.org/docs/',
  'Expensify API': 'https://docs.expensify.com/',
  'Tailwind CSS': 'https://tailwindcss.com/docs',
  OAuth: 'https://oauth.net/2/',
  REST: 'https://restfulapi.net/',
  Rust: 'https://doc.rust-lang.org/book/',
  ReactJS: 'https://react.dev/learn',
  WebSockets: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
  Redis: 'https://redis.io/docs/latest/',
  'Property Testing': 'https://en.wikipedia.org/wiki/QuickCheck',
  Flamegraph: 'https://www.brendangregg.com/flamegraphs.html',
  'REST API': 'https://restfulapi.net/',
  'OpenAI API': 'https://platform.openai.com/docs/overview',
  'Node.js': 'https://nodejs.org/en/docs',
  MongoDB: 'https://www.mongodb.com/docs/',
  ESP32: 'https://docs.espressif.com/',
  'C++': 'https://en.cppreference.com/w/',
  MQTT: 'https://mqtt.org/',
  'VEML7700 Sensor': 'https://www.vishay.com/docs/84286/veml7700.pdf',
  Adafruit: 'https://learn.adafruit.com/',
  PubSubClient: 'https://pubsubclient.knolleary.net/',
  'Embedded Systems': 'https://interrupt.memfault.com/',
};
