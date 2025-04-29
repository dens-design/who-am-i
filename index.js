const characters = [
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

const opponentImage = document.getElementById("opponentImage");
const opponentName = document.getElementById("opponentName");
const characterList = document.getElementById("characterList");

function randomizeOpponent() {
  const index = Math.floor(Math.random() * characters.length);
  opponentImage.src = characters[index].url;
  opponentName.textContent = characters[index].name;
}

function newGame() {
  randomizeOpponent();
  drawCharacterList();
}

function drawCharacterList() {
  let characterString = "";
  for (let i = 0; i < characters.length; i++) {
    characterString += `
        <div class="card">
            <img class="cardImage" src="${characters[i].url}" alt="" />
            <p class="cardName">${characters[i].name}</p>
        </div>        
        `;
  }
  characterList.innerHTML = characterString;
  const cards = document.querySelectorAll(".cardImage");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function (element) {
      element.target.classList.toggle("eliminated");
    });
  }
}

newGame();
