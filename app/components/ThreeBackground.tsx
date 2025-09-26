// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// import HALO from "vanta/dist/vanta.halo.min.js";

// export default function HaloBackground() {
//   const vantaRef = useRef<HTMLDivElement>(null);
//   const vantaEffect = useRef<unknown>(null);

//   useEffect(() => {
//     if (!vantaRef.current) return;

//     // Get Tailwind bg-background color from CSS variable
//     const style = getComputedStyle(vantaRef.current);
//     const bgColor = style.backgroundColor;

//     // Convert "rgb(r, g, b)" → hex number for Vanta
//     const rgbToHex = (rgb: string) => {
//       const result = rgb.match(/\d+/g)?.map(Number) || [0, 0, 0];
//       return (result[0] << 16) + (result[1] << 8) + result[2];
//     };

//     if (!vantaEffect.current) {
//       vantaEffect.current = HALO({
//         el: vantaRef.current,
//         THREE,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         backgroundColor: rgbToHex(bgColor),
//         baseColor: 0x1a59,
//         size: 1,
//         amplitudeFactor: 1,
//         xOffset: 0,
//         yOffset: 0,
//       });
//     }

//     return () => {
//       (vantaEffect.current as { destroy: () => void })?.destroy();
//     };
//   }, []);

//   return (
//     <div
//       ref={vantaRef}
//       className="fixed inset-0 -z-10 bg-background transition-colors duration-300"
//     />
//   );
// }
