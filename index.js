import { categories } from "./data.js";

const opponentImage = document.getElementById("opponent-image");
const opponentName = document.getElementById("opponentName");
const characterList = document.getElementById("characterList");
const categoryDropdown = document.getElementById("category-dropdown");
let chosenCategory = categories[0].array;

function randomizeOpponent() {
  const index = Math.floor(Math.random() * chosenCategory.length);
  opponentImage.src = chosenCategory[index].url;
  opponentName.textContent = chosenCategory[index].name;
}

function newGame() {
  randomizeOpponent();
  drawCharacterList();
}

function drawCharacterList() {
  let characterString = "";
  for (let i = 0; i < chosenCategory.length; i++) {
    characterString += `
        <div class="guess-card">
            <img class="cardImage" src="${chosenCategory[i].url}" alt="" />
            <p class="cardName">${chosenCategory[i].name}</p>
        </div>        
        `;
  }
  characterList.innerHTML = characterString;
}

characterList.addEventListener("click", function (e) {
  console.log(e.target.classList);
  if (
    e.target.classList.contains("cardName") ||
    e.target.classList.contains("cardImage")
  ) {
    e.target.parentElement.classList.toggle("eliminated");
  } else if (e.target.classList.contains("guess-card")) {
    e.target.classList.toggle("eliminated");
  }
});

drawCategorieDropdown();
newGame();

function drawCategorieDropdown() {
  let html = "";
  console.log("CategoriesArray: " + categories);
  console.log(typeof categories);
  for (let category of categories) {
    console.log(category);
    html += `<option>${category.name}</option>`;
  }
  console.log(html);
  categoryDropdown.innerHTML = html;
}

categoryDropdown.addEventListener("change", function () {
  for (category of categories) {
    if (category.name === document.querySelector("option:checked").value) {
      chosenCategory = category.array;
    }
  }
  newGame();
});
