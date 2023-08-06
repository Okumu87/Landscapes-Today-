const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveCLasses();
    panel.classList.add("active");
  });
});

//functions

function removeActiveCLasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
