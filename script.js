const textarea = document.getElementById("text-input");

const wordCountDisplay = document.getElementById("word-count");

textarea.addEventListener("input", () => {
  const text = textarea.value.trim();
  const words = text === "" ? 0 : text.split(/\s+/).length;
  wordCountDisplay.textContent = `Words:${words}`;
});
