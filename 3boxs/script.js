
function toggleBox(box) {
  document
    .querySelectorAll(".offer-box")
    .forEach((el) => el.classList.remove("expanded"));
  box.classList.add("expanded");
}
