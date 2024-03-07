const box = document.querySelector(".container");
const game = ["Demon Soul", "Dark Soul", "Elden Ring", "Sekiro"];
const brand = [
  "FromsorftWare",
  "Naughty Dogs",
  "Cherry Team",
  "Nintentdo",
  "Xbox",
];
let y = 0;
let x = 0;

function Shuffle(array) {
  const list = [...array];
  for (let i = list.length - 1; i > 0; i--) {
    const ChooseRandom = Math.floor(Math.random() * (i + 1));
    const index = list[i];

    list[i] = list[ChooseRandom];
    list[ChooseRandom] = index;
  }
  return list;
}

// console.log(Shuffle([...game, ...brand]));
function slideWord() {
  box.innerHTML = `
    <h1>
      Game Of The Year is  ${Shuffle([...game, ...brand])}
    </h1>
    `;
}

slideWord();
