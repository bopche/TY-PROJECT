document.addEventListener("DOMContentLoaded", () => {
    const ratings = document.querySelectorAll(".rating span");

    ratings.forEach((star) => {
        star.addEventListener("click", (e) => {
            const value = e.target.getAttribute("data-value");
            const stars = e.target.parentElement.querySelectorAll("span");

            // Reset all stars
            stars.forEach((s) => s.classList.remove("active"));

            // Highlight stars up to the selected one
            for (let i = 0; i < value; i++) {
                stars[i].classList.add("active");
            }

            alert(`You rated this ${value} star(s)!`);
        });
    });
});
