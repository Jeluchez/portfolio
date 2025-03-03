interface Job {
    company: string;
    client: string;
    location: string;
    period: string;
    title: string;
    responsibilities: string[];
    technologies: string[];
  }

export const careerData: Job[] = [
  {
    company: 'Globant',
    client: 'Investment American Century(ACI)',
    location: 'Cali, Colombia',
    period: 'Jun 2024 - Jan 2025',
    title: 'Web UI developer',
    responsibilities: [
      'Perform the migration of the current application from Next.js to SvelteKit',
      'Collaborate with migrating the current continuous deployment from AWS to Cloudflare'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'SvelteKit', 'Cloudflare', 'GitHub Actions']
  },
  {
    company: 'Globant',
    client: 'Colsubsidio',
    location: 'Cali, Colombia',
    period: 'May 2023 - Jun 2024',
    title: 'Web UI developer',
    responsibilities: [
      'Developed the design system components using the storybook library in order to reuse them in the Next.js app',
      'Implemented payment gateway service in the payment module',
      'Implemented accessibility, apply best practices to enhance the app\'s performance, and apply security best practices'
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Azure', 'Git']
  },
  {
    company: 'Grupo Babel',
    client: 'Walmart',
    location: 'Bogotá, Colombia',
    period: 'Jan 2020 - Jan 2022',
    title: 'Full stack Engineer',
    responsibilities: [
      'Built REST API in Nodejs for the Walmart eCommerce systems',
      'Optimized the performance of the REST APIs',
      'Collaborated in the redesigning of the database model',
      'Optimized the code of the frontend',
      'Created the relational model (MR) of the Walmart home delivery database'
    ],
    technologies: ['React', 'Node.js', 'Git', 'GitHub', 'Jest', 'GitLab', 'Kubernetes', 'SQL Server', 'Sequelize']
  }
];
