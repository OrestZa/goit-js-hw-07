const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", (evt) => {outputEl.textContent = evt.target.value.trim() || "Anonymous";})