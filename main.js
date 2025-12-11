const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// MENU OPEN / CLOSE
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// CLOSE MENU WHEN CLICKING A LINK
document.querySelectorAll(".nav_links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
});


// ----------------------
// SCROLL REVEAL FIXED
// ----------------------
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Header
ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption
});
ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500
});

// About
ScrollReveal().reveal(".about_image img", {
    ...scrollRevealOption,
    origin: "left"
});
ScrollReveal().reveal(".about_content .section_subheader", {
    ...scrollRevealOption,
    delay: 500
});
ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
    delay: 1000
});
ScrollReveal().reveal(".about_content .section_description", {
    ...scrollRevealOption,
    delay: 1500
});
ScrollReveal().reveal(".about_btn", {
    ...scrollRevealOption,
    delay: 2000
});

// Rooms
ScrollReveal().reveal(".room_card", {
    ...scrollRevealOption,
    interval: 500
});

// Services
ScrollReveal().reveal(".service_list li", {
    ...scrollRevealOption,
    interval: 500,
    origin: "right"
});
