addEventListener("DOMContentLoaded", () => {
    // Create an Intersection Observer to fade in images as they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Check if the element is visible in the viewport
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the fade-in animation
                entry.target.classList.add('visible');
                // Stop observing this element (optional - remove if you want repeated animations)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,     // Trigger when 25% of the element is visible
        rootMargin: '0px',   // Extra space around the viewport (like CSS margin)
        root: null           // null = use the window viewport
    });

    const fades = document.querySelectorAll('.fade');
    fades.forEach(fade => {
        observer.observe(fade);
    });
    // // Load background images when they enter the viewport
    // const observerImages = new IntersectionObserver((entries) => {
    // entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //     const bgUrl = entry.target.dataset.bg;
    //     entry.target.style.backgroundImage = `url(${bgUrl})`;
    //     observer.unobserve(entry.target);
    //     }
    // });
    // });

    // // Observe all elements with data-bg attribute
    // document.querySelectorAll('[data-bg]').forEach(el => {
    // observerImages.observe(el);
    // });
});
