particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: ["#ff6347", "#ff6347"] }, // Soft orange & gray for visibility
        shape: { type: "circle", stroke: { width: 0, color: "#000" }, polygon: { nb_sides: 5 } },
        opacity: { value: 0.7, anim: { enable: false } },
        size: { value: 8, random: true, anim: { enable: false } },
        line_linked: { enable: true, distance: 150, color: "#ff6347", opacity: 0.6, width: 1 },
        move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});
