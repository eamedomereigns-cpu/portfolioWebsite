//Log visitor agents for analytic purpose 

function logVisitor() {
  const ua = navigator.userAgent;

  function detectBrowser() {
    if (ua.includes("Firefox")) return "Firefox";
    if (ua.includes("Chrome")) return "Chrome";
    if (ua.includes("Safari")) return "Safari";
    if (ua.includes("Edge")) return "Edge";
    return "Unknown";
  }

  function detectOS() {
    if (ua.includes("Windows")) return "Windows";
    if (ua.includes("Linux")) return "Linux";
    if (ua.includes("Mac")) return "MacOS";
    if (ua.includes("Android")) return "Android";
    if (ua.includes("iPhone")) return "iOS";
    return "Unknown";
  }

  function detectDevice() {
    return /Mobi|Android/i.test(ua) ? "Mobile" : "Desktop";
  }

  const params = new URLSearchParams({
    userAgent: ua,
    browser: detectBrowser(),
    os: detectOS(),
    device: detectDevice()
  });

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbySjAgN1j_tk_fNWear7fuFW3mI5_dtUZkbGceBULn35YpBhztJ2AZXcisJprW5xybo1w/exec"; // replace with your Web App URL

  fetch(`${SCRIPT_URL}?${params.toString()}`)
    .then(() => console.log("Visitor logged"))
    .catch(err => console.error(err));
}

window.addEventListener("load", logVisitor);

//Contact form
//Takes the name, email and message from visitors
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    // Animate hamburger into X
    menuToggle.classList.toggle("open");
  });

    emailjs.init("GDpfl5AdCIJ0SRQEV"); 

    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const submitButton = contactForm.querySelector("button[type='submit']");
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        emailjs.sendForm("service_vu88c1b", "template_7kagaxz", this)
            .then(function () {
                formMessage.textContent = "Message sent successfully!";
                formMessage.classList.add("success");
                formMessage.classList.remove("error");

                contactForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = "Send Message";

                // hide message after 5 seconds
                setTimeout(() => formMessage.textContent = "", 5000);
            }, function (error) {
                console.error("EmailJS Error:", error);
                formMessage.textContent = "Failed to send message. Please try again.";
                formMessage.classList.add("error");
                formMessage.classList.remove("success");

                submitButton.disabled = false;
                submitButton.textContent = "Send Message";

                // hide message after 5 seconds
                setTimeout(() => formMessage.textContent = "", 5000);
            });
    });
});

