const header = document.getElementById('main-header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const privacyModal = document.getElementById('privacy-modal');
const openPrivacy = document.getElementById('open-privacy');
const closePrivacy = document.getElementById('close-privacy');

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('-translate-y-full');
        return;
    }

    if (currentScroll > lastScroll && !mobileMenu.classList.contains('hidden')) {
        return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('-translate-y-full');
    } else {
        header.classList.remove('-translate-y-full');
    }
    
    lastScroll = currentScroll;
});

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        mobileMenu.classList.add('hidden');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);

openPrivacy.addEventListener('click', () => {
    privacyModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closePrivacy.addEventListener('click', () => {
    privacyModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

privacyModal.addEventListener('click', (e) => {
    if (e.target === privacyModal) {
        privacyModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

reveal();