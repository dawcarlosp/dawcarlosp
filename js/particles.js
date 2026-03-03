tsParticles.load("tsparticles", {
  fpsLimit: 30, 
  fullScreen: { enable: true, zIndex: -1 },
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      push: { quantity: 3 }, 
      repulse: { distance: 100, duration: 0.4 }
    }
  },
  particles: {
    number: { 
      value: 40,
      limit: 80, 
      density: { enable: true, area: 1000 } 
    },
    color: { value: "#1aff8c" },
    links: { 
      enable: true, 
      distance: 150, 
      color: "#1aff8c", 
      opacity: 0.2, 
      width: 1 
    },
    move: { 
      enable: true, 
      speed: 1, 
      outModes: "out"
    },
    size: { value: { min: 1, max: 3 } },
    opacity: { value: 0.4 }
  },
  pauseOnBlur: true, 
  detectRetina: false 
});