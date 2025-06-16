import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    if (vantaEffectRef.current) {
      vantaEffectRef.current.destroy();
    }

    vantaEffectRef.current = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,

      color: 0xff9900,
      backgroundColor: 0x111122,
      spacing: 12.0,
      maxDistance: 27.0,
    });

    return () => {
      if (vantaEffectRef.current) vantaEffectRef.current.destroy();
    };
  });

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default VantaBackground;
