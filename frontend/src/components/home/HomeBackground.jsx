export default function HomeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-themed" />
      <div className="themed-gradient-bg-home absolute inset-0" />
      <div className="home-grid-bg absolute inset-0 animate-grid-shift opacity-50" />
      <div
        className="absolute -left-32 top-20 h-[380px] w-[380px] animate-orb-drift rounded-full blur-[100px]"
        style={{ backgroundColor: 'var(--orb-1)' }}
      />
      <div
        className="absolute -right-24 top-1/3 h-[340px] w-[340px] animate-orb-drift-slow rounded-full blur-[100px]"
        style={{ backgroundColor: 'var(--orb-2)' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[280px] w-[280px] animate-orb-drift rounded-full blur-[90px]"
        style={{ backgroundColor: 'var(--orb-3)' }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ backgroundImage: 'linear-gradient(to right, transparent, var(--line-accent), transparent)' }}
      />
    </div>
  );
}
