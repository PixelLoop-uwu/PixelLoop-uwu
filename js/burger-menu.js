document.addEventListener("DOMContentLoaded", function() {
    const burgerButton = document.querySelector(".burger-button");
    const menuPanel = document.querySelector(".links");

    let menu_toggle = false

    burgerButton.addEventListener("click", function() {
      if (!menu_toggle) {
        menu_toggle = !menu_toggle;
        menuPanel.classList.toggle("open");
      } else {
        menu_toggle = !menu_toggle;
        menuPanel.classList.remove("open");
      }
    });
});
