```javascript
// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });

});


// =========================================
// CURRENT YEAR
// =========================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =========================================
// QUOTE FORM
// =========================================

const quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const location = document.getElementById("location").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();


    if (!name || !phone || !location || !service || !message) {

        alert("Please fill in all the fields.");

        return;
    }


    // Create WhatsApp message

    const whatsappMessage =
        "Hello Murthy Constructions,%0A%0A" +

        "*New Construction Quote Request*%0A%0A" +

        "*Name:* " + encodeURIComponent(name) + "%0A" +

        "*Phone:* " + encodeURIComponent(phone) + "%0A" +

        "*Location:* " + encodeURIComponent(location) + "%0A" +

        "*Service:* " + encodeURIComponent(service) + "%0A" +

        "*Requirements:* " + encodeURIComponent(message);


    // Open WhatsApp

    const whatsappURL =
        "https://wa.me/917660099626?text=" +
        whatsappMessage;

    window.open(whatsappURL, "_blank");

});
```
