let isPidgin = false; // Track language mode

document.getElementById("change").addEventListener("click", function () {
  isPidgin = !isPidgin;
  let textElement = document.querySelector(".will");

  textElement.classList.add("fade-out");

  setTimeout(() => {
    if (isPidgin) {
      this.textContent = "Change to English";
      textElement.textContent =
        "Wetin dey sup shawty, You no go like be my val ? 😏❤️";
    } else {
      this.textContent = "Change to Pidgin";
      textElement.textContent = "Will you be my valentine ?";
    }

    textElement.classList.remove("fade-out");
    textElement.classList.add("fade-in");
  }, 500);
});

function handleChoice(isPositive) {
  let textElement = document.querySelector(".will");
  let answerContainer = document.querySelector(".answer");
  let tryAgainBtn = document.getElementById("try-again");

  textElement.classList.add("fade-out");
  answerContainer.classList.add("fade-out");

  setTimeout(() => {
    let responseText = isPositive
      ? isPidgin
        ? "Awwwn 🥰! You don burst my brain!"
        : "Aww! 🥰 You made my day!"
      : isPidgin
      ? "Chai! 💔 You don break my heart o!"
      : "Oh no! 💔 You broke my heart!";

    textElement.textContent = responseText;

    // Save response to local storage
    let responses =
      JSON.parse(localStorage.getItem("valentineResponses")) || [];
    responses.push(responseText);
    localStorage.setItem("valentineResponses", JSON.stringify(responses));

    textElement.classList.remove("fade-out");
    textElement.classList.add("fade-in");

    setTimeout(() => {
      answerContainer.style.opacity = "0";
      setTimeout(() => {
        answerContainer.style.display = "none";
      }, 300);
      tryAgainBtn.style.display = "block"; // Show "Try Again" button

      // 🎉 Trigger confetti if the user said YES 🎉
      if (isPositive) {
        startConfetti();
      }
    }, 500);
  }, 500);
}

// Reset everything when "Try Again" is clicked
document.getElementById("try-again").addEventListener("click", function () {
  let textElement = document.querySelector(".will");
  let answerContainer = document.querySelector(".answer");

  textElement.classList.add("fade-out");

  setTimeout(() => {
    textElement.textContent = isPidgin
      ? "Wetin dey sup shawty, You no go like be my val ? 😏❤️"
      : "Will you be my valentine ?";

    answerContainer.style.display = "flex"; // Show choices again
    setTimeout(() => {
      answerContainer.style.opacity = "1";
    }, 100);

    this.style.display = "none"; // Hide "Try Again" button
    textElement.classList.remove("fade-out");
    textElement.classList.add("fade-in");

    stopConfetti(); // Stop confetti on reset
  }, 500);
});

// Event listeners for choices
document.querySelector(".positive").addEventListener("click", function () {
  handleChoice(true);
});

document.querySelector(".negative").addEventListener("click", function () {
  handleChoice(false);
});

// Display stored responses on page load
document.addEventListener("DOMContentLoaded", function () {
  console.log(
    "Previous Responses:",
    JSON.parse(localStorage.getItem("valentineResponses"))
  );
});

// 🎉 Confetti Effect 🎉
function startConfetti() {
  let canvas = document.createElement("canvas");
  canvas.id = "confettiCanvas";
  document.body.appendChild(canvas);

  let confettiSettings = { target: "confettiCanvas", max: 100 };
  let confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  setTimeout(() => {
    stopConfetti();
  }, 5000); // Stop confetti after 5 seconds
}

function stopConfetti() {
  let canvas = document.getElementById("confettiCanvas");
  if (canvas) {
    canvas.remove();
  }
}

// year
document.getElementById("year").textContent = new Date().getFullYear();
