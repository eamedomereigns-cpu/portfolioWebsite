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

// Log visitor on page load
window.addEventListener("load", logVisitor);
