// Scroll Animations
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});