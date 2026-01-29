// LOGIN MODAL
const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");

loginBtn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";

// SLIDER
const images = [
 "https://via.placeholder.com/1200x350/2874f0/ffffff?text=Big+Sale",
 "https://via.placeholder.com/1200x350/f44336/ffffff?text=Electronics",
 "https://via.placeholder.com/1200x350/4caf50/ffffff?text=Fashion"
];

let index = 0;
const slideImage = document.getElementById("slideImage");

setInterval(() => {
    index = (index + 1) % images.length;
    slideImage.src = images[index];
}, 3000);

// CART
let cartCount = 0;
document.querySelectorAll(".addCart").forEach(btn => {
    btn.onclick = () => {
        cartCount++;
        document.getElementById("cartCount").innerText = cartCount;
    };
});
