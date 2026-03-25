// Typing Animaion
var typed = new Typed('.typing',{
    strings:['','Fullstack MERN Developer', 'Tech Consultant'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

// Back to the Top
const backToTopBtn = document.getElementById("backToTop");
    
// Show button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const navToggler = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

// Toggle the 'openSideBar' class on the sidebar
navToggler.addEventListener('click', () => {
  const barIcon = navToggler.querySelector('i');
  barIcon.classList.toggle('fa-bars');
  barIcon.classList.toggle('fa-xmark');
  aside.classList.toggle('openSideBar');
  navToggler.classList.toggle('active'); 
});

// On page load, set correct icon and logo
window.addEventListener('load', () => {
  const barIcon = navToggler.querySelector('i');
  if (barIcon.classList.contains('fa-bars')) {
    barIcon.classList.add('fa-bars');
  } else {
    barIcon.classList.add('fa-xmark');
  }
});

// 👉 Close sidebar when clicking a link inside it
const sideLinks = aside.querySelectorAll('a'); // all <a> links inside sidebar

sideLinks.forEach(link => {
  link.addEventListener('click', () => {
    aside.classList.remove('openSideBar');
    navToggler.classList.remove('active');

    // reset the toggle icon back to bars
    const barIcon = navToggler.querySelector('i');
    barIcon.classList.add('fa-bars');
    barIcon.classList.remove('fa-xmark');
  });
});


// Smooth Scroll
const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // offset for nav height
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      // Close the sidebar when a nav link is clicked (on small screens)
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Only close if sidebar is open
    if (aside.classList.contains("openSideBar")) {
      aside.classList.remove("openSideBar");
      navToggler.classList.remove("active");

      // Reset the icon to fa-bars
      const barIcon = navToggler.querySelector('i');
      barIcon.classList.remove('fa-xmark');
      barIcon.classList.add('fa-bars');
    }
  });
});

    });
    window.addEventListener('load', () => {
      // Force scroll to top
      window.scrollTo(0, 0);
  
      // Optional: Remove hash from URL if present
      if (window.location.hash) {
        history.replaceState(null, null, ' ');
      }
    });
  //  Portfolio Pagination 
  const projectsPerPage = 3;
const projects = document.querySelectorAll(".project-box");
const pagination = document.getElementById("pagination");

let currentPage = 1;
const totalPages = Math.ceil(projects.length / projectsPerPage);

function showProjects(page) {
  const start = (page - 1) * projectsPerPage;
  const end = start + projectsPerPage;

  projects.forEach((project, index) => {
    project.style.display =
      index >= start && index < end ? "block" : "none";
  });
}

function createPagination() {
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;

    if (i === currentPage) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      currentPage = i;
      showProjects(currentPage);
      createPagination();
    });

    pagination.appendChild(button);
  }
}

// Initial load
showProjects(currentPage);
createPagination();
