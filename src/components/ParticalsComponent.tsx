import { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);
  const MemoizedParticles = useMemo(
    () => (
      <Particles
        className="absolute top-0 left-0 w-full h-full -z-10"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            zIndex: 0,
            enable: false, // Disable fullscreen
          },
          background: {
            color: {
              value: "#000000",
            },
            opacity: 0,
          },
          fpsLimit: 60, // Limit the frame rate to 120 frames per second
          particles: {
            number: {
              value: 50, // Adjust the number of particles
              density: {
                enable: true,
                value_area: 800, // Adjust the area in which particles are distributed
              },
            },
            size: {
              value: {
                min: 0.3,
                max: 3,
              }, // Adjust the particle size
            },
            color: {
              value: ["#5232d2", "#001242", "#972bc5"], // Set the particle color
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: {
                value: ["#5232d2", "#001242", "#972bc5"],
              },
              opacity: 0.015,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              random: false,
              speed: {
                min: 0.01,
                max: 2,
              },
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 6000,
                rotateY: 12000,
              },
            },
            opacity: {
              value: 0.3, // Adjust the initial opacity of particles
              random: true, // Randomize opacity for a blinking effect
              anim: {
                enable: true,
                speed: 1, // Adjust the blink speed
                opacity_min: 0.01, // Minimum opacity during blinking
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: false, // Disable hover interaction
              },
            },
          },
          detectRetina: true, // Enable retina detection for higher quality
        }}
      />
    ),
    []
  );
  return MemoizedParticles;
};

export default ParticlesComponent;
