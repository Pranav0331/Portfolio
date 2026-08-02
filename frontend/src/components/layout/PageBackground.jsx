export default function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-themed" />
      <div className="themed-gradient-bg absolute inset-0" />
      <div className="home-grid-bg absolute inset-0 opacity-40" />
      <div
        className="absolute -left-32 top-20 h-[360px] w-[360px] rounded-full blur-[100px]"
        style={{ backgroundColor: 'var(--orb-1)' }}
      />
      <div
        className="absolute -right-24 top-1/3 h-[320px] w-[320px] rounded-full blur-[100px]"
        style={{ backgroundColor: 'var(--orb-2)' }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent"
        style={{ backgroundImage: 'linear-gradient(to right, transparent, var(--line-accent), transparent)' }}
      />
    </div>
  );
}
