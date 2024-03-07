const game = ["Demon Soul", "Dark Soul", "Elden Ring", "Sekiro"];
const brand = [
  "FromsorftWare",
  "Naughty Dogs",
  "Cherry Team",
  "Nintentdo",
  "Xbox",
];

// function slideWord() {
//   box.innerHTML = `
//     <h1>
//       Game Of The Year is ${game} <br>
//       Developer :   ${brand}
//     </h1>
//     `;
// }
// slideWord();

function show() {
  const brands = [
    "FromsorftWare",
    "Naughty Dogs",
    "Cherry Team",
    "Nintentdo",
    "Xbox",
  ];
  let box = document.querySelector(".myFavorite");
  box.insertAdjacentHTML(
    "beforeend",

    `<div class="board">
      ${brands
        .map(
          (brand) =>
            `<h1>
        ${brand}
            </h1>`
        )
        .join("")}
      </div>`
  );
}
show();
