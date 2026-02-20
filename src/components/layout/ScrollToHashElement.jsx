import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// Helper component to scroll to elements when URL has a #hash
// Example: visiting /#services from another page
const ScrollToHashElement = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash.replace("#", ""));
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, [hash]);

    return null;
};

export default ScrollToHashElement;
