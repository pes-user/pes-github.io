document.addEventListener("DOMContentLoaded", function () {
    // Floating Scroll Effect
    const elements = document.querySelectorAll(".float-on-scroll");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    // Zoom-In Effect on Page Load
    const zoomInElements = document.querySelectorAll(".zoom-in");
    zoomInElements.forEach(element => {
        element.classList.add('visible');
    });
});
