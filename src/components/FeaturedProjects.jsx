import { motion } from 'framer-motion';
import featuredProjects from '../data/featuredProjects';

function CaseStudyCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card card-hover overflow-hidden flex flex-col"
    >
      {project.image && (
        <div className="h-48 overflow-hidden border-b border-rose-100/60 dark:border-stone-700/60">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-1">{project.date}</p>
          <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-50">{project.title}</h3>
          <p className="text-muted text-sm mt-1">{project.tagline}</p>
        </div>

        <p className="text-sm font-semibold text-rose-600 dark:text-rose-300 mb-4">{project.role}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-200 border border-rose-100 dark:border-rose-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-4 text-sm text-body flex-grow">
          <div>
            <h4 className="font-semibold text-stone-800 dark:text-stone-100 mb-1">Problem</h4>
            <p className="leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="font-semibold text-stone-800 dark:text-stone-100 mb-1">What I built</h4>
            <p className="leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <h4 className="font-semibold text-stone-800 dark:text-stone-100 mb-1">Outcome</h4>
            <p className="leading-relaxed">{project.outcome}</p>
          </div>
        </div>

        {(project.link || project.secondaryLink) && (
          <div className="flex flex-wrap gap-3 mt-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                {project.linkLabel || 'View Project'}
              </a>
            )}
            {project.secondaryLink && (
              <a
                href={project.secondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                {project.secondaryLinkLabel || 'Learn More'}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function FeaturedProjects() {
  return (
    <section id="featured" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subheading">Selected Work</p>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            A closer look at the projects I'm most proud of — from UI/UX case studies to full-stack builds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <CaseStudyCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
