export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg-dark noise-overlay relative">
      {/* Primary aurora blob — emerald */}
      <div
        className="absolute top-[-25%] left-[-20%] w-[60%] h-[60%] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.5) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 70%)',
          animation: 'float-slow 14s ease-in-out infinite, blob-morph 18s ease-in-out infinite',
          willChange: 'transform',
          filter: 'blur(60px)',
        }}
      />

      {/* Secondary aurora blob — cyan */}
      <div
        className="absolute bottom-[-20%] right-[-15%] w-[55%] h-[55%] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(ellipse, rgba(34, 211, 238, 0.4) 0%, rgba(34, 211, 238, 0.1) 50%, transparent 70%)',
          animation: 'float-reverse 12s ease-in-out infinite, blob-morph 22s ease-in-out infinite reverse',
          willChange: 'transform',
          filter: 'blur(60px)',
        }}
      />

      {/* Tertiary aurora blob — violet */}
      <div
        className="absolute top-[40%] right-[15%] w-[38%] h-[38%] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
          animation: 'float-slow 18s ease-in-out infinite 4s, blob-morph 24s ease-in-out infinite',
          willChange: 'transform',
          filter: 'blur(70px)',
        }}
      />

      {/* Quaternary accent blob — emerald bottom left */}
      <div
        className="absolute bottom-[10%] left-[10%] w-[28%] h-[28%] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
          animation: 'float-reverse 16s ease-in-out infinite 2s, blob-morph 20s ease-in-out infinite',
          willChange: 'transform',
          filter: 'blur(50px)',
        }}
      />

      {/* Fine grid lines — premium tech feel */}
      <div
        className="absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(52, 211, 153, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52, 211, 153, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Larger grid accent (perspective grid) */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.9) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.9) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Center radial spotlight */}
      <div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] -z-10 rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.04) 0%, rgba(34, 211, 238, 0.02) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-bg-dark to-transparent" />
      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-dark to-transparent" />
    </div>
  );
}
