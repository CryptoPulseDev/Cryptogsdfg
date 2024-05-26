import { is_premium, username, photo_url } from "./telegram.js";

document.addEventListener("DOMContentLoaded", (event) => {
  console.log(is_premium);
  const coin = document.getElementById("coin");
  const scoreDisplay = document.getElementById("score");
  let score = 0;

  coin.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
  });
});
