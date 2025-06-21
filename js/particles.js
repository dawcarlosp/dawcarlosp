tsParticles.load("tsparticles", {
      background: { color: { value: "#0B132B" } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: true
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 }
        }
      },
      particles: {
        color: { value: "#1aff8c" },
        links: { color: "#1aff8c", distance: 150, enable: true, opacity: 0.5, width: 1 },
        move: { enable: true, speed: 2, outModes: "bounce" },
        number: { value: 80, density: { enable: true, area: 800 } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } }
      },
      detectRetina: true
    });