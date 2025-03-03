const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio built with Next.js & TailwindCSS.',
    githubUrl: 'https://github.com/Jeluchez/portfolio',
    tools: ['Typescript', 'Nextjs', 'Tailwind']
  },
  {
    title: 'Tickets app',
    description: 'A Nextjs application for selling tickets to the beaches',
    githubUrl: 'https://github.com/Jeluchez/ticket-frontend',
    tools: ['Typescript', 'Nextjs', 'MUI']
  },
  {
    title: 'Spotify app',
    description: 'A client application of a spotify API',
    githubUrl: 'https://github.com/Jeluchez/spotify-app',
    tools: ['Typescript', 'React', 'sass']
  }
];

export default function GithubGrid() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-white-400 shadow-lg rounded-xl text-left">
            <a href={project.githubUrl}><h3 className="text-lg font-semibold text-gray-800">{project.title}</h3></a>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="mt-4 flex space-x-1">
              {
                project?.tools?.map((title) => (
                  <span key={title} className="tag inline-block py-[0.25em] px-[0.5em] text-xs">{title}</span>
                ))
              }

            </div>
          </div>
        ))}
      </div>

      {/* "See More" Button */}
      <div className="text-center mt-8">
        <a
          href="https://github.com/your-github"
          target="_blank"
          className="tag px-4 py-2"
        >
           All projects
        </a>
      </div>
    </div>
  );
}
