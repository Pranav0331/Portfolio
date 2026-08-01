import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles, Search, Layers, Code2 } from 'lucide-react';
import PageMeta from '../components/layout/seo/PageMeta';
import HackathonCard from '../components/hackathons/HackathonCard';
import HackathonTimeline from '../components/hackathons/HackathonTimeline';
import HackathonModal from '../components/hackathons/HackathonModal';
import HackathonDetailsModal from '../components/hackathons/HackathonDetailsModal';
import { hackathons } from '../data/hackathons';

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.35 },
};

const allTech = [...new Set(hackathons.flatMap((h) => h.tech))].sort();

export default function Hackathons() {
  const [query, setQuery] = useState('');
  const [techFilter, setTechFilter] = useState('All');

  // Details Modal State
  const [selectedHackathon, setSelectedHackathon] = useState(null);

  // Gallery Modal State
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [mediaItems, setMediaItems] = useState([]);
  const [initialMediaIndex, setInitialMediaIndex] = useState(null);
  const [mediaTitle, setMediaTitle] = useState('Hackathon Gallery');

  const handleOpenDetails = (hackathon) => {
    setSelectedHackathon(hackathon);
  };

  const handleCloseDetails = () => {
    setSelectedHackathon(null);
  };

  const handleOpenMedia = (items, index = null, title = 'Hackathon Gallery') => {
    setMediaItems(items);
    setInitialMediaIndex(index);
    setMediaTitle(title);
    setIsMediaModalOpen(true);
  };

  const handleCloseMedia = () => {
    setIsMediaModalOpen(false);
  };

  const filteredHackathons = useMemo(() => {
    return hackathons.filter((h) => {
      const matchesTech = techFilter === 'All' || h.tech.includes(techFilter);
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        h.title.toLowerCase().includes(q) ||
        h.subtitle.toLowerCase().includes(q) ||
        h.description.toLowerCase().includes(q) ||
        h.tech.some((t) => t.toLowerCase().includes(q));
      return matchesTech && matchesQuery;
    });
  }, [query, techFilter]);

  return (
    <>
      <PageMeta
        title="Hackathons & Innovation Journey | Pranav Mathur"
        description="Explore national hackathons, autonomous robotics competitions, AI sprints, awards, and verified certificates by Pranav Mathur."
      />

      <section className="page-container space-y-8">
        {/* Compact Hero Section */}
        <motion.div {...fadeIn} className="glass-card p-5 sm:p-7 relative overflow-hidden rounded-[24px]">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Innovation & Rapid Prototyping
            </div>

            <h1 className="page-title text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Hackathons & <span className="gradient-text">Innovation Journey</span>
            </h1>

            <p className="page-subtitle text-xs sm:text-sm leading-relaxed mt-2.5 max-w-2xl">
              Competitive national hackathons, robotics challenges, and AI innovation sprints where complex problems were solved under strict deadlines.
            </p>

            {/* Compact Metrics Bar */}
            <div className="mt-5 grid grid-cols-3 gap-2.5 max-w-xl">
              <div className="glass-panel p-2.5 rounded-xl flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500 shrink-0">
                  <Trophy className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-base font-bold text-themed">3</div>
                  <div className="text-[10px] text-themed-subtle">Featured</div>
                </div>
              </div>

              <div className="glass-panel p-2.5 rounded-xl flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500 shrink-0">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-base font-bold text-themed">1st Place</div>
                  <div className="text-[10px] text-themed-subtle">DronePratibimb</div>
                </div>
              </div>

              <div className="glass-panel p-2.5 rounded-xl flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-500 shrink-0">
                  <Code2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-base font-bold text-themed">15+ Tech</div>
                  <div className="text-[10px] text-themed-subtle">Full-Stack AI</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Compact Search & Filter Toolbar */}
        <motion.div {...fadeIn} className="glass-card p-3 sm:p-4 flex flex-col gap-2.5 sm:flex-row items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-themed-subtle pointer-events-none" />
            <input
              type="search"
              placeholder="Search hackathons or tech..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="glass-input pl-9 text-xs py-2"
              aria-label="Search hackathons"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Layers className="h-3.5 w-3.5 text-themed-subtle hidden sm:block" />
            <select
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
              className="glass-input w-full sm:w-44 text-xs py-2"
              aria-label="Filter by technology"
            >
              <option value="All">All Technologies</option>
              {allTech.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Responsive Grid: 3 per row on Desktop (lg), 2 on Tablet (md), 1 on Mobile */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="section-title text-lg sm:text-xl">Featured Competitions</h2>
            <span className="text-xs text-themed-subtle">{filteredHackathons.length} items</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredHackathons.map((hackathon) => (
              <HackathonCard
                key={hackathon.id}
                hackathon={hackathon}
                onOpenDetails={handleOpenDetails}
                onOpenMedia={handleOpenMedia}
              />
            ))}
          </div>

          {filteredHackathons.length === 0 && (
            <div className="glass-card p-8 text-center text-xs text-themed-subtle">
              No hackathons found matching your search.
            </div>
          )}
        </div>

        {/* Milestone Timeline */}
        <motion.div {...fadeIn} className="space-y-4 pt-2">
          <div>
            <h2 className="section-title text-lg sm:text-xl">Timeline & Milestones</h2>
            <p className="text-xs text-themed-muted mt-0.5">
              Chronological breakdown of national innovation sprints.
            </p>
          </div>

          <HackathonTimeline
            hackathons={hackathons}
            onSelectHackathon={(item) => {
              const card = filteredHackathons.find((h) => h.id === item.id) || item;
              handleOpenDetails(card);
            }}
          />
        </motion.div>
      </section>

      {/* Details Popup Modal */}
      <HackathonDetailsModal
        isOpen={Boolean(selectedHackathon)}
        hackathon={selectedHackathon}
        onClose={handleCloseDetails}
        onOpenMedia={handleOpenMedia}
      />

      {/* Fullscreen Interactive Responsive Gallery Grid Modal */}
      <HackathonModal
        isOpen={isMediaModalOpen}
        title={mediaTitle}
        items={mediaItems}
        initialIndex={initialMediaIndex}
        onClose={handleCloseMedia}
      />
    </>
  );
}
