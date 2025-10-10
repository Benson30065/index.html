document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const response = await fetch("https://formspree.io/f/your-form-id", {
    method: "POST",
    body: data,
    headers: { "Accept": "application/json" }
  });

  const status = document.getElementById("formStatus");
  if (response.ok) {
    status.textContent = "Thanks for your message! We'll get back to you soon.";
    form.reset();
  } else {
    status.textContent = "Oops! There was a problem submitting your form.";
  }
});
