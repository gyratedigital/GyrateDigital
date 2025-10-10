"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Slow down the video playback speed for smoother animation
      videoRef.current.playbackRate = 0.5;
      
      // Ensure smooth looping by preloading and handling loop event
      videoRef.current.addEventListener('ended', () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1]">
      {/* Video Element with smooth transitions */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 object-contain brightness-90 contrast-110 saturate-110 hue-rotate-15 transition-opacity duration-1000"
        style={{ 
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          transform: 'translate(-50%, -50%) translateZ(0)',
          willChange: 'transform'
        }}
      >
        {/* Local video from public folder */}
        <source
          src="/blob-loop-uncompressed.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Optional: Overlay to darken/lighten the background */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </div>
  );
}

