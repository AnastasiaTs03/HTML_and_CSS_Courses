const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            if (entry.target.classList.contains('photos')) {
                const images = entry.target.querySelectorAll('.fade-up');
                images.forEach(img => img.classList.add('show'));
                observer.unobserve(entry.target);
            }

            if (entry.target.id === 'review') {
                const reviewText = entry.target.querySelector('.review-text');
                if (reviewText) {
                    reviewText.classList.add('slide-in-right');
                }
                observer.unobserve(entry.target);
            }
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.photos').forEach(section => {
    observer.observe(section);
});

const reviewSection = document.querySelector('#review');
if (reviewSection) {
    observer.observe(reviewSection);
}