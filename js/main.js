const hideAllMenus = () => {
  document
    .querySelectorAll(".notification-list, .message-list, .profile-menu-list")
    .forEach((val) => val.classList.add("hide"));
};

const toggleMenu = (menuSelector) => {
  const menu = document.querySelector(menuSelector).classList;
  if (menu.contains("hide")) {
    hideAllMenus();
    menu.remove("hide");
  } else {
    hideAllMenus();
  }
};

document
  .querySelector(".notification-container")
  .addEventListener("click", () => {
    toggleMenu(".notification-list");
  });

document.querySelector(".message-container").addEventListener("click", () => {
  toggleMenu(".message-list");
});

document.querySelector(".profile-container").addEventListener("click", () => {
  toggleMenu(".profile-menu-list");
});

document.body.addEventListener("click", (e) => {
  if (
    e.target.closest(".notification-container") ||
    e.target.closest(".message-container") ||
    e.target.closest(".profile-container")
  )
    return;

  hideAllMenus();
});

document.querySelectorAll(".toggle-menu-btn").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    if (window.screen.width > 780) {
      sidebar.classList.toggle("hidden");
    } else {
      sidebar.classList.toggle("show");
    }
  });
});
