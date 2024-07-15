let menu = document.getElementById("menu");
let openMenu = document.getElementById("open-menu");
openMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");

  if (menu.classList.contains("hidden")) {
    openMenu.classList =
      "fa-solid fa-bars text-2xl md:hidden cursor-pointer text-gray-700";
  } else {
    openMenu.classList =
      "fa-solid fa-xmark text-2xl md:hidden cursor-pointer text-gray-700";
  }
});

let btn = document.getElementById("arrow");

// window.onscroll = function () {
//   if (window.scrollY >= 800) {
//     Object.assign(btn.style, {
//       transform: "translateY(0)",
//       opacity: "1",
//       animation: "moveUpDown 1s infinite",
//     });
//   } else {
//     btn.style.display = "none";
//   }
// };

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const duration = 3000;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        counter.innerText = Math.floor(progress * target);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          counter.innerText = target;
        }
      };

      requestAnimationFrame(step);
    };

    updateCount();
  });
});
