document.addEventListener('DOMContentLoaded', () => {
    // Statistical Title Count-Up Animation
    const title = document.querySelector('.stats-title');
    const finalText = title.textContent;
    title.textContent = '0';
    let count = 0;
    const maxCount = 100;
    const interval = setInterval(() => {
        if (count < maxCount) {
            count += 5;
            title.textContent = `${count}KB`;
        } else {
            clearInterval(interval);
            title.textContent = finalText;
        }
    }, 50);

    // Typewriter Effect with Cycling Phrases
    const typewriter = document.querySelector('.typewriter');
    const phrases = ["Data Engineer", "Data Pipeline Expert", "Data Scientist"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        if (!isDeleting) {
            typewriter.textContent = currentPhrase.substring(0, charIndex++);
            if (charIndex > currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, 1500);
            } else {
                setTimeout(type, 100);
            }
        } else {
            typewriter.textContent = currentPhrase.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, 50);
            }
        }
    }
    type();

    // Theme Toggle
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        themeToggle.querySelector('i').classList.toggle('fa-moon', !isDark);
        themeToggle.querySelector('i').classList.toggle('fa-sun', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Smooth Scrolling
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Circular Progress Bars
    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        circle.style.setProperty('--progress', `${progress * 3.6}deg`);
    });

    // Back-to-Top Button
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 300);
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Header Animation on Scroll
    const header = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.height = '60vh';
        } else {
            header.style.height = '70vh';
        }
    });

    // Current Date Display
    const dateSpan = document.getElementById('current-date');
    const today = new Date('February 27, 2025'); // Hardcoded per context
    // dateSpan.textContent = `Current Date: ${today.toLocaleDateString()}`;
});