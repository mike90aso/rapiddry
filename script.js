// Update phone number in one place — display format and tel: link
const PHONE_DISPLAY = "689-332-2002";
const PHONE_TEL = "+16893322002";

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".phone-display").forEach((el) => {
  el.textContent = PHONE_DISPLAY;
});

document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.href = `tel:${PHONE_TEL}`;
});
