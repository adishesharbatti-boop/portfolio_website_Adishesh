// script.js - portfolio scripts

// 1. Check that JS is working
console.log("JavaScript is connected! 🚀");

// 2. Display the current year in the footer
let footerYear = document.querySelector(".footer-year");
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

// 3. Greeting based on time of day
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "Good morning!";
    } else if (hour < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
}

const herotitle = document.querySelector(".hero-section h1");
if (herotitle) {
    herotitle.textContent = `${getGreeting()} I'm Adishesh Arbatti 👋`;
}

// === MOBILE MENU TOGGLE ===
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("open"));
    });
}

// === SCROLL-BASED NAVBAR STYLING ===
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
});

// === ACTIVE NAV LINK ON SCROLL ===
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// === PROJECT FILTER SYSTEM ===
const projects = [
    { id: 1, name: "Weather App", category: "web", tech: ["React", "API"] },
    { id: 2, name: "Todo App", category: "web", tech: ["JavaScript"] },
    { id: 3, name: "Portfolio", category: "design", tech: ["HTML", "CSS"] },
    { id: 4, name: "Calculator", category: "web", tech: ["JavaScript"] }
];

function renderProjects(filter = "all") {
    const grid = document.querySelector(".projects-grid");
    if (!grid) return;

    const filtered = filter === "all"
        ? projects
        : projects.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(project => `
        <article class="project-card">
            <div class="project-card-body">
                <h3>${project.name}</h3>
                <div class="project-tags">
                    ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <a href="#" class="btn btn-primary">View Project</a>
            </div>
        </article>
    `).join('');
}

// Filter buttons event listener
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProjects(btn.dataset.filter);
    });
});

// Initial render
renderProjects();