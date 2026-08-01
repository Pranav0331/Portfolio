import { useMemo, useState } from 'react';
import { ExternalLink, FolderKanban } from 'lucide-react';
import PageMeta from '../components/layout/seo/PageMeta';
import { GitHubIcon } from '../components/ui/SocialIcons';
import SmartProjectImage from '../components/ui/SmartProjectImage';
import { projects } from '../data/projects';

const allTech = [...new Set(projects.flatMap((p) => p.tech))].sort();

export default function Projects() {
  const [query, setQuery] = useState('');
  const [tech, setTech] = useState('All');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesTech = tech === 'All' || p.tech.includes(tech);
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesTech && matchesQuery;
    });
  }, [query, tech]);

  return (
    <>
      <PageMeta
        title="Projects | Pranav Mathur"
        description="Selected software projects by Pranav Mathur including full-stack apps, APIs, and algorithm work."
      />
      <section className="page-container">
        <div className="glass-card mb-8 p-6 sm:p-8">
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            A selection of work spanning full-stack development, APIs, and algorithms.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="search"
              placeholder="Search projects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="glass-input max-w-md"
              aria-label="Search projects"
            />
            <select
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              className="glass-input max-w-xs"
              aria-label="Filter by technology"
            >
              <option value="All">All technologies</option>
              {allTech.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="glass-card group flex flex-col overflow-hidden"
            >
              <SmartProjectImage
                src={project.image}
                alt={project.title}
                containerClassName="h-72 w-full"
                imageClassName="transition-transform duration-500 group-hover:scale-105"
              />

              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-semibold text-themed">{project.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-themed-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="glass-badge">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3 border-t pt-4" style={{ borderColor: 'var(--glass-border)' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-btn flex-1 text-themed-muted"
                  >
                    <GitHubIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="glass-btn-primary flex-1"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-themed-subtle">No projects match your filters.</p>
        )}
      </section>
    </>
  );
}
