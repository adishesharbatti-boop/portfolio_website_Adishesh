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
// FORM VALIDATION
const form = document.querySelector('#contact-form');
 
function showError(input, message){
    const group = input.closest ('.form-group');
    const existing = group.querySelector('.error-msg');
    if(!existing){
        const errEl = document.createElement('span');
        errEl.className = 'error-msg';
        errEl.textContent = message ;
        group.appendChild(errEl);
    }
    input.classList.add('error');
}
 
function clearErrors(){
    document.querySelectorAll('.error-msg').forEach(e => e.remove());
    document.querySelectorAll('.error').forEach(e => e.classList.remove('.error'));
}
 form.addEventListener('submit', async (e) =>{
    e.preventDefault();
    clearErrors();
 
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
 
    let valid= true;
     if(!name.value.trim()) {
        showError(name, 'Name is required !');
        valid= false;
     }
     if(!email.value.includes('@')){
        showError(email, 'Enter a valid email !');
        valid= false;
     }
     if(message.value.trim().length < 10){
        showError(message, 'Message must be atleast 10 characters !');
        valid=false;
     }
     if(valid){
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent ='Sending...'
        btn.disabled = true;
     // Simulate sending (replace with real API call later)
     await new Promise(resolve => setTimeout (resolve, 3000));
 
     btn.textContent='✅ Message Sent !'
     form.reset();
     setTimeout(()=>{
        btn.textContent='Send Message';
        btn.disabled=false;
 
     },3000)
    }
 });
 
 // DARK MODE
 const themeBtn = document.querySelector(".theme-toggle");
 function updateThemeIcon(theme) {
    themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
 }
 if (themeBtn){
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.dataset.theme = savedTheme;
    updateThemeIcon(savedTheme);
    themeBtn.addEventListener('click', () =>{
        const nexTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light'
        document.body.dataset.theme = nexTheme;
        localStorage.setItem("theme", nexTheme);
        updateThemeIcon(nexTheme);
    })
 }
 