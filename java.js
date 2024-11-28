// Mengambil elemen penting
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// 1. Menu Hamburger
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active"); // Menambahkan atau menghapus kelas 'active' pada navbar
    menuIcon.classList.toggle("bx-x"); // Mengubah ikon menjadi tanda silang
});

// 2. Highlight Navigasi Saat Scroll
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// 3. Animasi Scroll untuk Navbar
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth",
        });

        // Menutup navbar di layar kecil
        if (navbar.classList.contains("active")) {
            navbar.classList.remove("active");
            menuIcon.classList.remove("bx-x");
        }
    });
});

// 4. Efek Hover pada Tombol (opsional)
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "0.3s";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});

