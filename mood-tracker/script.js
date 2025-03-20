document.addEventListener("DOMContentLoaded", () => {
  const moodButtons = document.querySelectorAll(".mood-btn");
  const moodHistory = document.getElementById("mood-history");

  // Load existing mood data
  function loadMoods() {
    const moods = JSON.parse(localStorage.getItem("moods")) || [];
    moodHistory.innerHTML = moods
      .map((entry) => `<p class="mood-entry">${entry.date}: ${entry.mood}</p>`)
      .join("");
  }

  // Save mood
  moodButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mood = button.dataset.mood;
      const today = new Date().toLocaleString("en-GB");

      const moods = JSON.parse(localStorage.getItem("moods")) || [];
      moods.push({ date: today, mood });
      //   localStorage.setItem("moods", JSON.stringify(moods));
      saveDataToLocalStorage(moods);
      //   loadMoods();
    });
  });

  function saveDataToLocalStorage(data) {
    localStorage.setItem("moods", JSON.stringify(data));

    // Trigger popup after saving data
    openPopup();
  }

  // Function to open the popup
  function openPopup() {
    document.getElementById("popup").style.display = "flex";
    loadMoods();
  }

  loadMoods(); // Load history on page load
});

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
