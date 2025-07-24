const untrusted = "<img src=x onerror=alert(1)>";
document.body.innerHTML = untrusted; // should be flagged by no‑unsanitized