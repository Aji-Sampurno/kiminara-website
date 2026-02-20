import { useEffect } from 'react';

// Custom hook to trigger revealing animations upon scrolling
export const useScrollReveal = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });

        return () => {
            revealElements.forEach(el => {
                revealObserver.unobserve(el);
            });
        };
    }, []); // Re-run effect when items change if navigating
};
