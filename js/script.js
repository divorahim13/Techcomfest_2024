const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = function () {
  const galleryImages = document.querySelectorAll(".img-box");
  galleryImages.forEach((img) => {
    const imgPosition = img.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (imgPosition < screenPosition) {
      img.classList.add("reveal");
    }
  });
};

// Fungsi untuk mengecek apakah elemen berada dalam viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fungsi yang dijalankan saat window di-scroll
window.addEventListener("scroll", function () {
  // Pilih semua elemen dengan kelas 'reveal'
  document.querySelectorAll(".reveal").forEach(function (revealElement) {
    if (isInViewport(revealElement)) {
      revealElement.classList.add("active"); // Tambahkan kelas 'active' jika elemen berada dalam viewport
    }
  });
});

document.getElementById('floating-button').addEventListener('click', function() {
  var element = document.getElementById('awal-culture');
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
});

