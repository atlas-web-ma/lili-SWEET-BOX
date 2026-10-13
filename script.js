// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Fermer le menu après avoir cliqué sur un lien

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ================= WHATSAPP ORDER =================

// ⚠️ بدلي الرقم ديالك هنا
const phoneNumber = "212690956892";


function order(product) {

    const message =
        `Bonjour Lili Sweet Box 🌸\n\n` +
        `Je voudrais commander : ${product}\n\n` +
        `Merci ❤️`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}


// ================= SCROLL ANIMATION =================

const cards = document.querySelectorAll(
    ".product-card, .feature, .about-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "all .7s ease";

    observer.observe(card);

});