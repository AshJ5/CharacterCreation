document.getElementById("characterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const character = Object.fromEntries(formData.entries());

  localStorage.setItem("character", JSON.stringify(character));

  window.location.href = "view.html";
});
