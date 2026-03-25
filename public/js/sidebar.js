function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("hide");
}

function toggleForm() {
  const form = document.getElementById("resourceForm");

  if (!form) return;

  form.style.display =
    form.style.display === "none" ? "block" : "none";
}