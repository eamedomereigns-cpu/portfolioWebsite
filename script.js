async function logVisitor() {
  const userAgent = navigator.userAgent;

  function detectBrowser() {
    if (userAgent.includes("Firefox")) return "Firefox";
    if (userAgent.includes("Chrome")) return "Chrome";
    if (userAgent.includes("Safari")) return "Safari";
    if (userAgent.includes("Edge")) return "Edge";
    return "Unknown";
  }

  function detectOS() {
    if (userAgent.includes("Windows")) return "Windows";
    if (userAgent.includes("Linux")) return "Linux";
    if (userAgent.includes("Mac")) return "MacOS";
    if (userAgent.includes("Android")) return "Android";
    if (userAgent.includes("iPhone")) return "iOS";
    return "Unknown";
  }

  function detectDevice() {
    if (/Mobi|Android/i.test(userAgent)) return "Mobile";
    return "Desktop";
  }

  const payload = {
    userAgent: userAgent,
    browser: detectBrowser(),
    os: detectOS(),
    device: detectDevice(),
    token: "MY_SECRET_KEY_123"
  };

  // Replace with your Apps Script Web App URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwT7Vu9T4dKONvnF_LqgC_aBSo5c5bDaCwun7oRaJkybHnbVf_LeQi1SInrlWOpzfft8w/exec"

  await fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    }
  });
}

// Run when page loads
window.addEventListener("load", logVisitor);

// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    nav.classList.remove('active'); // close mobile menu after click
  });
});
