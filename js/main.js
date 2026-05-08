/* ============================================================
   PetShop — main.js  (shared across all pages)
   ============================================================ */

console.log("🐾 PetShop — loaded");

/* ── Hamburger / Mobile Menu ───────────────────────────────── */
function toggleMenu() {
  const m = document.getElementById("mobileMenu");
  if (m) m.classList.toggle("open");
}

/* ── Active Nav Link (highlight current page) ─────────────── */
(function setActiveNav() {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === page || (page === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
})();

/* ── Modal ─────────────────────────────────────────────────── */
function openModal(title, desc, price, img) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent  = desc;
  document.getElementById("modalPrice").textContent = price;
  document.getElementById("modalImg").src           = img;
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(e) {
  if (!e || e.target === document.getElementById("modalOverlay")) {
    document.getElementById("modalOverlay").classList.remove("open");
    document.body.style.overflow = "";
  }
}

/* ── Toast helper ───────────────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

/* ── Add-to-cart (modal) ────────────────────────────────────── */
function addToCart() {
  closeModal();
  showToast("✅ เพิ่มสินค้าลงตะกร้าแล้ว!");
}

/* ── Contact form submit ────────────────────────────────────── */
function submitForm() {
  const name  = (document.getElementById("fname")  || {}).value?.trim();
  const email = (document.getElementById("femail") || {}).value?.trim();
  const msg   = (document.getElementById("fmsg")   || {}).value?.trim();

  if (!name || !email || !msg) {
    alert("⚠️ กรุณากรอกข้อมูลให้ครบทุกช่อง");
    return;
  }
  showToast("📩 ส่งข้อความสำเร็จ! เราจะติดต่อกลับเร็วๆ นี้");
  document.getElementById("fname").value  = "";
  document.getElementById("femail").value = "";
  document.getElementById("fmsg").value   = "";
}
