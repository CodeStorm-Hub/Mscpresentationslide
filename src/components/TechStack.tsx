import { Code, Smartphone, Server, Database, Cloud, Shield } from 'lucide-react';

export function TechStack() {
  const techCategories = [
    {
      title: 'Frontend (Web)',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      technologies: [
        { name: 'React 18', desc: 'UI Framework' },
        { name: 'TypeScript', desc: 'Type Safety' },
        { name: 'Next.js 14', desc: 'SSR & SEO' },
        { name: 'Tailwind CSS', desc: 'Styling' },
        { name: 'Redux Toolkit', desc: 'State Management' },
        { name: 'React Query', desc: 'Data Fetching' }
      ]
    },
    {
      title: 'Mobile App',
      icon: Smartphone,
      color: 'from-green-500 to-green-600',
      technologies: [
        { name: 'React Native', desc: 'Cross-platform' },
        { name: 'TypeScript', desc: 'Type Safety' },
        { name: 'Expo', desc: 'Development Tools' },
        { name: 'Native Base', desc: 'UI Components' },
        { name: 'React Navigation', desc: 'Routing' },
        { name: 'AsyncStorage', desc: 'Local Storage' }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-purple-500 to-purple-600',
      technologies: [
        { name: 'Node.js', desc: 'Runtime' },
        { name: 'Express.js', desc: 'API Framework' },
        { name: 'NestJS', desc: 'Enterprise Framework' },
        { name: 'GraphQL', desc: 'API Query' },
        { name: 'Socket.io', desc: 'Real-time' },
        { name: 'JWT', desc: 'Authentication' }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-orange-500 to-orange-600',
      technologies: [
        { name: 'PostgreSQL', desc: 'Relational DB' },
        { name: 'MongoDB', desc: 'Document DB' },
        { name: 'Redis', desc: 'Caching' },
        { name: 'Prisma', desc: 'ORM' },
        { name: 'TypeORM', desc: 'ORM Alternative' },
        { name: 'Elasticsearch', desc: 'Search Engine' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-indigo-500 to-indigo-600',
      technologies: [
        { name: 'AWS', desc: 'Cloud Provider' },
        { name: 'Docker', desc: 'Containerization' },
        { name: 'Kubernetes', desc: 'Orchestration' },
        { name: 'GitHub Actions', desc: 'CI/CD' },
        { name: 'Nginx', desc: 'Web Server' },
        { name: 'CloudWatch', desc: 'Monitoring' }
      ]
    },
    {
      title: 'Security & Testing',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      technologies: [
        { name: 'OAuth 2.0', desc: 'Authorization' },
        { name: 'SSL/TLS', desc: 'Encryption' },
        { name: 'Jest', desc: 'Unit Testing' },
        { name: 'Cypress', desc: 'E2E Testing' },
        { name: 'SonarQube', desc: 'Code Quality' },
        { name: 'Helmet.js', desc: 'Security' }
      ]
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 p-10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-4xl font-bold text-slate-800 mb-3">Technology Stack</h2>
        <div className="h-1 w-24 bg-purple-600 rounded"></div>
        <p className="text-slate-600 mt-2">Modern, scalable, and industry-leading technologies</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-6">
        {/* Tech Stack Grid */}
        <div className="grid grid-cols-3 gap-4">
          {techCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-3 text-white`}>
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    <h3 className="font-bold text-sm">{category.title}</h3>
                  </div>
                </div>

                {/* Technologies List */}
                <div className="p-3 space-y-2">
                  {category.technologies.map((tech, techIdx) => (
                    <div key={techIdx} className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-0">
                      <span className="text-xs font-semibold text-slate-800">{tech.name}</span>
                      <span className="text-xs text-slate-500">{tech.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Tools */}
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <h3 className="font-bold text-slate-800 mb-3 text-center">Additional Tools & Services</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Stripe (Payments)',
              'Twilio (SMS)',
              'SendGrid (Email)',
              'Mapbox (Maps)',
              'Firebase (Push Notifications)',
              'Sentry (Error Tracking)',
              'Algolia (Search)',
              'Cloudinary (Media)'
            ].map((tool, idx) => (
              <div key={idx} className="bg-gradient-to-r from-slate-100 to-slate-200 px-3 py-1.5 rounded-full text-xs font-medium text-slate-700">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="flex-shrink-0 text-right text-slate-400 text-sm mt-4">
        CodeStorm Hub © 2026
      </div>
    </div>
  );
}