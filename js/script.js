const epicMix = [
  "O-o-oh Child — The Five Stairsteps",
  "What's Going On — Marvin Gaye",
  "If You Really Love Me — Stevie Wonder",
  "Just My Imagination(Running Away With Me) — The Temptations",
  "It's A Shame — The Spinners",
  "Dancing In the Street — Martha Reeves & The Vandellas",
  "Stop! In The Name of Love — The Supremes",
  "Shotgun — Junior Walker & The All Stars",
  "I Second That Emotion — Smokey Robinson & The Miracles",
  "Baby I Need Your Loving — Four Tops",
  "I Heard It Through the Grapevine — Marvin Gaye",
  "My Cherie Amour — Stevie Wonder",
  "This Old Heart of Mine (Is Weak for You) — The Isley Brothers",
  "Smiling Faces Sometimes — The Undisputed Truth",
  "Upside Down — Diana Ross",
  "Get Ready — Rare Earth",
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  // call your mixInfo() function and pass it the epicMix array as an argument
  mixInfo(epicMix);
});

// display the number of songs in the epicMix
total.innerText = `Can't go wrong with our ${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  // loop through the epicMix array with forEach() so we can access the value & index position of a song
  mix.forEach(function (song, index) {
    // in this callback function, create a list element and assign it to a variable called li
    let li = document.createElement("li");
    // add “song” class to your list item
    li.classList.add("song");
    // add the index number and song name inside li
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    // append the list item to mixList which is the unordered list element
    mixList.append(li);
  });
};
