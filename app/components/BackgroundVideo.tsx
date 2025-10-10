"use client";

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1]">
      {/* GIF Background with proper sizing */}
      <img
        src="/blob-loop-uncompressed.gif"
        alt="Background animation"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-none brightness-90 contrast-110 saturate-110 hue-rotate-15"
        style={{
          // minWidth: '50%',
          minHeight: '70%',
          objectFit: 'contain'
        }}
      />
      
      {/* Optional: Overlay to darken/lighten the background */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </div>
  );
}

