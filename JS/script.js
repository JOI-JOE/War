const container = document.querySelector(".container");
const box = document.querySelector(".myFavorite");
const GameOfYears = [
  {
    Name: "Sekiro Shadow Die Twice",
    Year: 2019,
    Developer: "Fromsofrware",
  },
  // {
  //   Name: "The Last Of Us",
  //   Year: 2020,
  //   Developer: "Naughty Dogs",
  // },
  // {
  //   Name: "Hollow Knight",
  //   Year: 2021,
  //   Developer: "Cherry Team",
  // },
];
const Hau = {
  year: 2003,
  Name: "Hollow Knight",
};
Hau.player = "Le Thu Hang";

// GameOfYears.forEach((game) => {
//   const h1 = document.createElement("h1");
//   const trContent = `
//     <td>${game.Name} - </td>
//     <td>${game.Year} - </td>
//     <td>${game.Developer}</td>
//     <td> - ${Hau.player}</td>
// `;
//   h1.innerHTML = trContent;
//   document.querySelector(".container").appendChild(h1);
// });
