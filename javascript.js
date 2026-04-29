document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const text = ["aspiring web developer.", "problem solver.", "lifelong learner."];
let index = 0;
let charIndex = 0;
const speed = 100;
const changingText = document.getElementById("typing");

function typeEffect() {
    if (charIndex < text[index].length) {
        changingText.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        changingText.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, speed / 2);
    } else {
        index = (index + 1) % text.length;
        setTimeout(typeEffect, speed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (changingText) typeEffect();
});

const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const sections = document.querySelectorAll("section");
const skillsSection = document.getElementById("skills");
const progressFills = document.querySelectorAll(".progress-fill");
let animated = false;

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            section.classList.add("show");
        }
    });

    if (skillsSection) {
        const skillsTop = skillsSection.getBoundingClientRect().top;
        if (skillsTop < triggerBottom && !animated) {
            progressFills.forEach(fill => {
                const percentage = fill.parentElement.parentElement.dataset.percentage;
                const circumference = 2 * Math.PI * 50;
                const offset = circumference * (1 - percentage / 100);
                fill.style.strokeDashoffset = offset;
            });
            animated = true;
        }
    }
});