document.addEventListener("DOMContentLoaded", function () {
    let particlesDiv = document.createElement("div");
    particlesDiv.id = "particles-js";
    document.body.prepend(particlesDiv); // Adds particles.js as the first element in the body

    let particlesStyle = document.createElement("style");
    particlesStyle.innerHTML = `
        #particles-js {
            position: fixed;
            width: 100%;
            height: 100%;
            z-index: -1;
            top: 0;
            left: 0;
        }
    `;
    document.head.appendChild(particlesStyle);

    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#fff", "#fff"] }, // Soft orange + gray for visibility
            shape: { type: "circle", stroke: { width: 0 }, polygon: { nb_sides: 5 } },
            opacity: { value: 0.7, anim: { enable: false } },
            size: { value: 8, random: true },
            line_linked: { enable: true, distance: 150, color: "#fff", opacity: 0.6, width: 1 },
            move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
});
