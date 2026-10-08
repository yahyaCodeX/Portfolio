export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#FAFAF9]">
      {/* Huge lime green radial gradient at the top */}
      <div 
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[100vh] opacity-80"
        style={{
          background: 'radial-gradient(ellipse at center top, #A3E635 0%, rgba(163, 230, 53, 0.4) 40%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </div>
  );
}
