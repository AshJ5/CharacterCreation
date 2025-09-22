const character = JSON.parse(localStorage.getItem("character"));

if (character) {
  document.getElementById("characterDisplay").innerHTML = `
    <p><strong>Name:</strong> ${character.name}</p>
    <p><strong>Class:</strong> ${character.class}</p>
    <p><strong>Ability:</strong> ${character.ability}</p>
  `;
} else {
  document.getElementById("characterDisplay").innerHTML = `
    <p>No character data found. Please <a href="configure.html">create one</a>.</p>
  `;
}
