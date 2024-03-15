const selectors = {
  boardContainer: document.querySelector(".board-container"),
  board: document.querySelector(".board"),
  moves: document.querySelector(".moves"),
  timer: document.querySelector(".timer"),
  start: document.querySelector("button"),
  win: document.querySelector(".win"),
};

const state = {
  gameStarted: false,
  flippedCards: 0,
  totalFlips: 0,
  totalTime: 0,
  loop: null,
};
const shuffle = (array) => {
  const clonedArray = [...array];

  for (let i = clonedArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const original = clonedArray[i];

    clonedArray[i] = clonedArray[randomIndex];
    clonedArray[randomIndex] = original;
  }

  return clonedArray;
};

const img_hang = [
  "3.jpg",
  "4.jpg",
  "7.jpg",
  "8.jpg",
  "10.jpg",
  "11.jpg",
  "19.jpg",
  "20.jpg",
];

const generateGame = () => {
  const items = shuffle(img_hang);
  const card = `
  <div class="board" style="grid-template-columns: repeat(4,auto) ;">
  ${items
    .map(
      (item) =>
        `
    <div class="card">
        <div class="card-front"></div>
        <div class="card-back">
          <img src="girl/${item}" alt=""  />
        </div>
    </div>
    `
    )
    .join("")}
  </div>
  
  `;
  selectors.boardContainer.insertAdjacentHTML("beforeend", card);
};
const flipCard = (card) => {
  state.flippedCards++;

  card.classList.add("flipped");
};
const ups = (card) => {
  state.flippedCards++;

  card.classList.toggle("flipped");
};

const attachEventListeners = () => {
  document.addEventListener("click", (event) => {
    const eventTarget = event.target;
    const eventParent = eventTarget.parentElement;

    if (
      eventTarget.className.includes("card") &&
      !eventParent.className.includes("flipped")
    ) {
      flipCard(eventParent);
    }
  });
};
generateGame();
attachEventListeners();
