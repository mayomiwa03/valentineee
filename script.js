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

  textElement.classList.add("fade-out");
  answerContainer.classList.add("fade-out"); // Hide options

  setTimeout(() => {
    if (isPositive) {
      textElement.textContent = isPidgin
        ? "Awwwn 🥰! You don burst my brain!"
        : "Aww! 🥰 You made my day!";
      document
        .querySelector("dotlottie-player")
        .setAttribute(
          "src",
          "https://lottie.host/9c21e4b3-8e28-4f45-8452-2b82f6b5ad01/Q5TGM8eLrC.lottie"
        );

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      textElement.textContent = isPidgin
        ? "Chai! 💔 You don break my heart o!"
        : "Oh no! 💔 You broke my heart!";
      document
        .querySelector("dotlottie-player")
        .setAttribute(
          "src",
          "https://lottie.host/726e1a4b-9e7d-4b6f-9b49-b2b71f24437d/6DXfB3Y2bM.lottie"
        );
    }

    textElement.classList.remove("fade-out");
    textElement.classList.add("fade-in");

    // Hide the answer options completely
    setTimeout(() => {
      answerContainer.style.display = "none";
    }, 500);
  }, 500);
}

document.querySelector(".positive").addEventListener("click", function () {
  handleChoice(true);
});

document.querySelector(".negative").addEventListener("click", function () {
  handleChoice(false);
});

// year
document.getElementById("year").textContent = new Date().getFullYear();
