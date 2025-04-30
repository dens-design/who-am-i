const celebrities = [
  { url: "/images/celebrities/Angelina_Jolie.jpg", name: "Angelina Jolie" },
  { url: "/images/celebrities/Blake_Lively.webp", name: "Blake Lively" },
  { url: "/images/celebrities/Brad_Pitt.webp", name: "Brad Pitt" },
  { url: "/images/celebrities/Chris_Hemsworth.webp", name: "Chris Hemsworth" },
  { url: "/images/celebrities/Daniel_Radcliffe.jpg", name: "Daniel Radcliffe" },
  { url: "/images/celebrities/Dua_Lipa.jpg", name: "Dua Lipa" },
  { url: "/images/celebrities/Dwayne_Johnson.jpg", name: "Dwayne Johnson" },
  { url: "/images/celebrities/Emma_Watson.webp", name: "Emma Watson" },
  { url: "/images/celebrities/Florence_Pugh.jpg", name: "Florence Pugh" },
  { url: "/images/celebrities/George_Clooney.jpg", name: "George Clooney" },
  {
    url: "/images/celebrities/Jennifer_Lawrence.jpg",
    name: "Jennifer Lawrence",
  },
  {
    url: "/images/celebrities/Leonardo_DiCaprio.jpg",
    name: "Leonardo DiCaprio",
  },
  { url: "/images/celebrities/Natalie_Portman.jpg", name: "Natalie Portman" },
  { url: "/images/celebrities/Oliva_Rodrigo.jpg", name: "Olivia Rodrigo" },
  { url: "/images/celebrities/Ryan_Reynolds.webp", name: "Ryan Reynolds" },
  {
    url: "/images/celebrities/Scarlett_Johansson.webp",
    name: "Scarlett Johansson",
  },
  {
    url: "/images/celebrities/Timothée_Chalamet.jpg",
    name: "Timothée Chalamet",
  },
  { url: "/images/celebrities/Tom_Hanks.jpg", name: "Tom Hanks" },
  { url: "/images/celebrities/Will_Smith.jpg", name: "Will Smith" },
  { url: "/images/celebrities/Zendaya.jpg", name: "Zendaya" },
];

const food = [
  { url: "/images/food/Apfel.jpg", name: "Apfel" },
  { url: "/images/food/Banane.jpg", name: "Banane" },
  { url: "/images/food/Brokkoli.jpg", name: "Brokkoli" },
  { url: "/images/food/Zitrone.jpg", name: "Zitrone" },
  { url: "/images/food/Möhre.webp", name: "Möhre" },
  { url: "/images/food/Tomate.jpg", name: "Tomate" },
  { url: "/images/food/Zucchini.jpg", name: "Zucchini" },
  { url: "/images/food/Ananas.jpg", name: "Ananas" },
  { url: "/images/food/Kartoffel.webp", name: "Kartoffel" },
  { url: "/images/food/Orange.webp", name: "Orange" },
  { url: "/images/food/Knoblauch.png", name: "Knoblauch" },
  { url: "/images/food/Bohne.jpg", name: "Bohne" },
  { url: "/images/food/Avocado.jpg", name: "Avocado" },
  { url: "/images/food/Mango.jpeg", name: "Mango" },
  { url: "/images/food/Paprika.jpg", name: "Paprika" },
  { url: "/images/food/Blumenkohl.jpg", name: "Blumenkohl" },
  { url: "/images/food/Erdbeeren.webp", name: "Erdbeeren" },
  { url: "/images/food/Pfirsich.jpeg", name: "Pfirsich" },
  { url: "/images/food/Weintraube.jpg", name: "Weintraube" },
  { url: "/images/food/Kürbis.webp", name: "Kürbis" },
];

const categories = [
  { name: "Celebrities", array: celebrities },
  { name: "Food", array: food },
];

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
  // const cards = document.querySelectorAll(".cardImage");
  // for (let i = 0; i < cards.length; i++) {
  //   cards[i].addEventListener("click", function (element) {
  //     element.target.classList.toggle("eliminated");
  //   });
  // }
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
  for (category of categories) {
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
