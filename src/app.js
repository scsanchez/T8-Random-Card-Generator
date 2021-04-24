window.onload = () => {
  const number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let suit = ["diamonds", "hearts", "clubs", "spades"];
  // let suit = [
  //     "https://cdn1.iconfinder.com/data/icons/games-7/48/Diamonds-512.png",
  //     "https://cdn1.iconfinder.com/data/icons/games-7/48/Diamonds-512.png",
  //     "https://cdn1.iconfinder.com/data/icons/games-7/48/Diamonds-512.png",
  //     "https://cdn1.iconfinder.com/data/icons/games-7/48/Diamonds-512.png"
  // ];
  //   let suit = ["❤", "✌", "🤷‍♂️", "🐱‍🏍"];

  let a = randomNumber(number);
  let b = randomSuit(suit);

  document.querySelector("#number").innerHTML = randomNumber(number);
};

function randomNumber(number) {
  let randomnumber = Math.floor(Math.random() * number.length);
  let showNumber = number[randomnumber];
  console.log(showNumber);
  return showNumber;
}

function randomSuit(suit) {
  let randomsuit = Math.floor(Math.random() * suit.length);
  let showSuit = suit[randomsuit];

  // document.querySelectorAll(".symbol").forEach(element => {
  //     element.classList.add(showSuit)
  // });

  const nodes = document.querySelectorAll(".symbol");
  for (i = 0; i < nodes.length; i++) {
    nodes[i].classList.add(showSuit);
  }

  console.log(showSuit);
  return showSuit;
}
