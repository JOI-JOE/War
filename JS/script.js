// const container = document.querySelector(".container");
// const box = document.querySelector(".myFavorite");
// const GameOfYears = [
//   {
//     Name: "Sekiro Shadow Die Twice",
//     Year: 2019,
//     Developer: "Fromsofrware",
//   },
//   {
//     Name: "The Last Of Us",
//     Year: 2020,
//     Developer: "Naughty Dogs",
//   },
//   {
//     Name: "Hollow Knight",
//     Year: 2021,
//     Developer: "Cherry Team",
//   },
// ];
// const Hau = {
//   year: 2003,
//   Name: "Hollow Knight",
// };
// function Shuffle(array) {
//   const list = [...array];
//   for (let i = list.length - 1; i > 0; i--) {
//     const ChooseRandom = Math.floor(Math.random() * (i + 1));
//     const index = list[i];

//     list[i] = list[ChooseRandom];
//     list[ChooseRandom] = index;
//   }
//   return list;
// }
// GameOfYears.forEach((game) => {
//   const h1 = document.createElement("h1");
//   const trContent = `
//     <td>${game.Name}</td>
//     <td>${game.Year}</td>
//     <td>${game.Developer}</td>
// `;
//   h1.innerHTML = trContent;
//   document.querySelector(".container").appendChild(h1);
// });

// console.log(Shuffle(GameOfYears));
// console.log(Hau);
// function slideWord() {}
// GameOfYears.forEach((game) => {
//   const div = document.createElement("div");
//   const box = `
//   <h1>
//     ${game["Name"]}
//     ${game["Name"].slice(0, 1) === "H" ? ": Game Of The Year" : ""}
//   </h1>
//   <h2>
//   ${game["Year"]}
//   </h2>
//   `;
//   div.innerHTML = box;
//   container.appendChild(div);
// });
